import { Component } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-knowmore',
  templateUrl: 'knowmore.page.html',
  styleUrls: ['knowmore.page.scss'],
})


// API de simulações da Mongeral, utilizada ao final da experiência para gerar uma simulação 
// com os dados do cliente para a corretora/banco parceiro, gerando uma oportunidade de contratação do serviço.


export class KnowMore {
    private API_URL = 'https://mongeralaegon-dev.apigee.net/apiseguradora/v2/simulacao?cnpj=11321351000110&codigoModeloProposta=YZ'
    constructor(public http: Http) { }

    sendPostRequest() {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });

        let postData = {  
            "simulacoes":[  
               {  
                  "proponente":{  
                     "tipoRelacaoSeguradoId":1,
                     "nome":"a",
                     "cpf":"11824104480",
                     "dataNascimento":"1997-04-14",
                     "profissaoCbo":"2410-05",
                     "renda":7000,
                     "sexoId":1,
                     "uf":"MA",
                     "declaracaoIRId":1
                  },
                  "periodicidadeCobrancaId":30,
                  "prazoCerto":10
               }
            ]
         };
    
        this.http.post(this.API_URL, postData, requestOptions)
          .subscribe(data => {
            console.log(data['_body']);
           }, error => {
            console.log(error);
          });
    }


}
