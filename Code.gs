function onFormSubmit(e) {
  const formResponse = e.response;
  const itemResponses = formResponse.getItemResponses();
  const data = {};
  
  itemResponses.forEach((itemResponse) => {
    const title = itemResponse.getItem().getTitle();
    let response;
    if (title == 'Foto de Identificação') {
      response = DriveApp.getFileById(itemResponse.getResponse()[0]).getDownloadUrl();
    } else {
      response = itemResponse.getResponse();
    }

    if (title == 'Nome Completo') {
      data['name'] = response;
    } else if (title == 'Matrícula') {
      data['id'] = response;
    } else if (title == 'Foto de Identificação') {
      data['picUrl'] = response;
    }

  });

  data['email'] = formResponse.getRespondentEmail()
  
  const headers = {
    Authorization: "Bearer <Token>"
  }

  const options = {
    headers: headers,
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(data),
  };
  
  const url = 'http://<HOST>/students';
  const response = UrlFetchApp.fetch(url, options);
  console.log(response.getResponseCode());
}
