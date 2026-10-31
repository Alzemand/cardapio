# Gera fotos/ a partir dos originais em img/.
# - aplica a orientacao EXIF
# - cria duas larguras: nome.jpg (ate 1200px) e nome-p.jpg (ate 600px)
# - grava sem metadados, removendo inclusive o GPS das fotos
#
# Uso, a partir da raiz do projeto:
#   powershell -ExecutionPolicy Bypass -File tools\otimizar-fotos.ps1

Add-Type -AssemblyName System.Drawing

$raiz = Split-Path -Parent $PSScriptRoot
$origem = Join-Path $raiz 'img'
$destino = Join-Path $raiz 'fotos'
New-Item -ItemType Directory -Force $destino | Out-Null

# original => nome publicado
$fotos = [ordered]@{
  '20250506_204007' = 'caldo-verde'
  '20250521_224301' = 'creme-abobora'
  '20240922_135645' = 'fusilli-bolonhesa'
  '20250211_210937' = 'conchiglioni'
  '20250222_134135' = 'lasanha'
  '20250402_214931' = 'nhoque-ragu'
  '20250918_215446' = 'nhoque-rustico'
  '20260729_123902' = 'nhoque-camarao-1'
  '20260729_123954' = 'nhoque-camarao-2'
  '20250628_005048' = 'fettuccine-alho'
  '20260222_134228' = 'fettuccine-pesto'
  '20260612_220536' = 'fettuccine-frutos-do-mar'
  '20260809_133836' = 'pappardelle-camarao'
  '20231203_205913' = 'arroz-frutos-do-mar'
  '20250330_140948' = 'risoto-frutos-do-mar'
  '20260221_130143' = 'risoto-camarao'
  '20250202_142721' = 'file-champignon-1'
  '20250202_143005' = 'file-champignon-2'
  '20250316_205751' = 'file-champignon-3'
  '20260228_134237' = 'file-champignon-4'
  '20250817_130123' = 'file-batatas'
  '20250215_134808' = 'file-espaguete-1'
  '20250215_134836' = 'file-espaguete-2'
  '20260509_141011' = 'medalhoes'
  '20260322_143802' = 'file-pure-vagens'
  '20260321_140851' = 'bisteca'
  '20250501_140552' = 'salmao-abobora-1'
  '20250501_140651' = 'salmao-abobora-2'
  '20250223_133146' = 'salmao-maracuja'
  '20250622_135647' = 'salmao-balsamico'
  '20250928_135814' = 'salmao-hasselback'
  '20250629_153832' = 'salmao-pesto'
  '20250907_135701' = 'salmao-alcaparras'
  '20250405_132740' = 'peixe-azeitonas'
  '20250920_133254' = 'peixe-camaroes'
  '20260426_143620' = 'peixe-champignon'
  '20260404_141018' = 'empanado-abobora'
  '20260524_135527' = 'empanado-sementes'
  '20260718_222618' = 'empanado-batata-doce'
  '20250414_194051' = 'yakisoba-frango'
  '20260801_140815' = 'macarrao-carne'
  '20250413_134336' = 'noite-mexicana'
  '20260802_144054' = 'tacos-1'
  '20260802_144600' = 'tacos-2'
  '20250417_194632' = 'fondue'
  '20250121_214558' = 'cheeseburger'
  '20250423_195445' = 'hamburguer-frango'
  '20251005_210212' = 'toast-abacate'
  '20260222_205912' = 'omelete'
  '20250906_144110' = 'maca-assada-1'
  '20250906_144320' = 'maca-assada-2'
}

$codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
  Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object System.Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
  [System.Drawing.Imaging.Encoder]::Quality, [long]80)

function Salvar-Redimensionada($imagem, [int]$largura, [string]$caminho) {
  $w = [Math]::Min($largura, $imagem.Width)
  $h = [int][Math]::Round($imagem.Height * ($w / $imagem.Width))
  $tela = New-Object System.Drawing.Bitmap $w, $h, ([System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
  $g = [System.Drawing.Graphics]::FromImage($tela)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.DrawImage($imagem, 0, 0, $w, $h)
  $g.Dispose()
  # O bitmap novo nao herda nenhuma propriedade EXIF do original.
  $tela.Save($caminho, $codec, $params)
  $tela.Dispose()
}

foreach ($item in $fotos.GetEnumerator()) {
  $arquivo = Join-Path $origem ($item.Key + '.jpg')
  if (-not (Test-Path -LiteralPath $arquivo)) { throw "Foto nao encontrada: $arquivo" }

  $img = [System.Drawing.Image]::FromFile($arquivo)
  if ($img.PropertyIdList -contains 0x0112) {
    $orientacao = [BitConverter]::ToUInt16($img.GetPropertyItem(0x0112).Value, 0)
    switch ($orientacao) {
      2 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipX) }
      3 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
      4 { $img.RotateFlip([System.Drawing.RotateFlipType]::RotateNoneFlipY) }
      5 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipX) }
      6 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
      7 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipX) }
      8 { $img.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
    }
  }

  Salvar-Redimensionada $img 1200 (Join-Path $destino ($item.Value + '.jpg'))
  Salvar-Redimensionada $img 600 (Join-Path $destino ($item.Value + '-p.jpg'))
  $img.Dispose()
  Write-Output $item.Value
}
