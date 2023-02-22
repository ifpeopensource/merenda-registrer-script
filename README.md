
# Script de registro de estudantes por formulário

<p align="center">
  <img alt="Contador de linguagens" src="https://img.shields.io/github/languages/count/ifpeopensource/merenda-registrer-script?color=%2304D361">

  <img alt="Tamanho do repositório" src="https://img.shields.io/github/repo-size/ifpeopensource/merenda-registrer-script">
	
  <a href="https://www.github.com/Gvinfinity">
    <img alt="Feito por Gabriel Soares" src="https://img.shields.io/badge/Feito%20por-Gabriel Soares-%2304D361">
  </a>

  <a href="https://ifpeopensource.com.br">
    <img src="https://img.shields.io/badge/IFPE Open Source-0a0a0a?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTUgMjUyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzJmOWU0MTt9LmNscy0ye2ZpbGw6I2M4MTkxZTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkJyYW5kIElGUEUgT3BlbiBTb3VyY2U8L3RpdGxlPjxnIGlkPSJMb2dvbWFyayI+PGcgaWQ9IkxvZ29tYXJrLTIiIGRhdGEtbmFtZT0iTG9nb21hcmsiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iMTQyLjMiIHk9IjEwLjUyIiB3aWR0aD0iMTA3LjIiIGhlaWdodD0iMTA3LjIiIHJ4PSI5Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxNDIuMyIgeT0iMTM5LjE2IiB3aWR0aD0iMTA3LjIiIGhlaWdodD0iMTA3LjIiIHJ4PSI5Ii8+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIxMy42NiIgeT0iMTM5LjE2IiB3aWR0aD0iMTA3LjIiIGhlaWdodD0iMTA3LjIiIHJ4PSI5Ii8+PGcgaWQ9Ik9wZW5fU291cmNlX1N5bWJvbCIgZGF0YS1uYW1lPSJPcGVuIFNvdXJjZSBTeW1ib2wiPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTY2LjczLDUuNjRBNjAuODUsNjAuODUsMCwwLDAsNDQuOSwxMjMuM2EzLjc0LDMuNzQsMCwwLDAsMy0uMTMsMy44NSwzLjg1LDAsMCwwLDItMi4yOUw2MS4zMSw4NC40MkEzLjgxLDMuODEsMCwwLDAsNTkuNTIsODAsMTUuMjMsMTUuMjMsMCwxLDEsNzQsODBhMy44LDMuOCwwLDAsMC0xLjc5LDQuNDdsMTEuNDIsMzYuNDZhMy44NCwzLjg0LDAsMCwwLDIsMi4zLDMuOTEsMy45MSwwLDAsMCwxLjY2LjM4LDQsNCwwLDAsMCwxLjM2LS4yNUE2MC44NSw2MC44NSwwLDAsMCw2Ni43Myw1LjY0WiIvPjwvZz48L2c+PC9nPjwvc3ZnPg=="></img>
  </a>

  <a href="https://github.com/ifpeopensource/merenda-registrer-script/blob/master/LICENSE" target="_blank">
    <img alt="License" src="https://img.shields.io/badge/licença-MIT-brightgreen"/>
  </a>
</p>

Script que facilita o registro dos estudantes através de um Google Forms.

## 🔧 Como funciona?

O projeto foi feito com o Google Apps Scripts para auxiliar o [projeto principal](https://github.com/ifpeopensource/merenda-server).

## 🚀 Como executar

- Acesse o site do [google forms](http://forms.google.com)
- Crie um formulário segundo o [modelo de formulário](#📝-modelo-do-formulário)
- No menu dos formulários (símbolo ⋮) acesse `Editor de Scripts`
- Cole o script e modifique o token e o host do servidor
- Salve as mudanças
- Acesse o item de `Triggers` com símbolo de relógio
- Adicione um trigger para o evento `On form submit`

## 📝 Modelo do Formulário

O formulário deverá conter exatamente os seguintes campos:

- Nome Completo
- Matrícula
- Foto de Identificação

Sendo a foto de identificação um campo de envio de arquivo com restrição de imagem.

Requisitos:

- A pasta de respostas do formulário que contém as imagens enviadas deverá ser compartilhada como pública
- A coleta de emails deverá ser habilitada

Recomendações:

- Limitar o tamanho de arquivo a 10 MB


## 👨🏽‍💻 Time

Este projeto é mantido pela seguinte pessoa e por esses [incríveis contribuidores](https://github.com/ifpeopensource/merenda-registrer-script/graphs/contributors).

| <img src="https://avatars.githubusercontent.com/u/49999449?v=4" width="200px"/>|
-----------------------------------------------------------------------------------------------------|
| [Gabriel Soares](https://github.com/Gvinfinity)

## 🤝 Contribuir
Contribuições, issues e pedidos de features são bem-vindos!<br />Sinta-se livre para checar a [página de issues](https://github.com/ifpeopensource/merenda-registrer-script/issues). 
- Crie um fork;
- Crie um branch com a sua feature: `git checkout -b my-feature`;
- Faça um commit com as mudanças: `git commit -m 'feat: My new feature'`;
- Faça um push para o seu branch: `git push origin my-feature`.

Após a sua pull request ser aceita, você pode excluir o seu branch.

## Demonstre o seu apoio

Dê uma ⭐️ se este projeto lhe ajudou!

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

***
Feito com ♥ por [Gabriel Soares](https://github.com/Gvinfinity) no [<img src="https://github.com/ifpeopensource.png" width="15px"/> IFPE Open Source](https://ifpeopensource.com.br)
