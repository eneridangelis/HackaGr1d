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
    private APIMONG_URL = 'https://mongeralaegon-dev.apigee.net/apiseguradora/v2/simulacao?cnpj=11321351000110&codigoModeloProposta=YZ'
    private APIBIG_URL= 'https://bridge.gr1d.io/apis/c7de5eed-3e1f-4491-9e5e-ed3e1f549160/documentation/content/peoplev2?Datasets=phones.limit(10)&q=doc{81995816186}&AccessToken'
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
    
        this.http.post(this.APIMONG_URL, postData, requestOptions)
          .subscribe(data => {
            console.log(data['_body']);
           }, error => {
            console.log(error);
          });
    }

    // API de validação de telefone celular, para facilitar a vida do corretor, sem a necessidade de realizar
    // a ligação para um número inválido, também será feita a request ao final da experiência.

    sendGetRequest() {
        var headers = new Headers();
        headers.append("Content-Type", 'application/json');
        const requestOptions = new RequestOptions({ headers: headers });

        let postData = {
            "Datasets": "phones.limit(10)",
            "q": "doc{81995816186}",
            "AccessToken": ""
        };

        this.http.post(this.APIBIG_URL, postData, requestOptions)
          .subscribe(data => {
            console.log(data['_body']);
           }, error => {
            console.log(error);
          });
    }


}
