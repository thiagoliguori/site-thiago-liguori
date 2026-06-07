# Site Thiago Liguori

Site pessoal de Thiago Liguori (MD, PhD) — palestrante de saúde e inovação.

## Stack

- HTML estático com React embutido (sem build step)
- `index.html` — entrada principal, importa os componentes JSX
- `app/app.jsx` — componente raiz
- `app/sections-a.jsx` e `app/sections-b.jsx` — seções da página
- `app/site.css` — estilos globais
- `assets/` — imagens (foto, clientes, eventos)
- `uploads/` — PDF do portfólio e foto de perfil

## Deploy

Push para `main` publica automaticamente via GitHub Pages:

```bash
git add -A
git commit -m "descrição da mudança"
git push
```

O site estará live em https://thiagoliguori.com.br em ~1 minuto.

## Repositório

https://github.com/thiagoliguori/site-thiago-liguori

## DNS

Domínio registrado no GoDaddy. 4 registros A apontam para GitHub Pages (185.199.108-111.153).
