# Chef Edilson · Cardápio

Cardápio estático em HTML, CSS e JavaScript, sem etapa de build.

## Publicar no GitHub Pages

```powershell
git add .
git commit -m "Cria o cardápio"
git push -u origin main
```

No GitHub, abra **Settings → Pages**. Em **Build and deployment**, escolha **Deploy from a branch**, a branch `main` e a pasta `/ (root)`, e salve.

Em alguns minutos o site fica em <https://alzemand.github.io/cardapio/>.

## Editar pratos

Tudo fica em `js/pratos.js`: grupos, nomes, descrições e fotos. O campo `foco` ajusta a altura do corte da foto na lista.

## Adicionar fotos

1. Coloque o original em `img/`.
2. Adicione a linha `'nome-do-original' = 'nome-publicado'` em `tools/otimizar-fotos.ps1`.
3. Rode o script e cite `nome-publicado` em `js/pratos.js`:

```powershell
powershell -ExecutionPolicy Bypass -File tools\otimizar-fotos.ps1
```

O script reduz as fotos e remove os metadados, inclusive a localização. A pasta `img/` não vai para o Git. Tudo em `fotos/` fica público.
