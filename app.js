            const currencyAPI = "https://api.coingecko.com/api/v3/coins/";
            const currency = ['bitcoin', 'ethereum', 'dogecoin','cardano','litecoin'];
            const tbody = document.getElementById("gh");
            const cntColumns = document.getElementsByClassName("crypto-attr").length;

            //const dataToAdd = []
            function createTable(){
                for(let i = 0; i < currency.length; i++){
                    let k = document.createElement('tr');
                    k.setAttribute('id', currency[i] + 'data')
                    tbody.appendChild(k);                   
                    for(let j = 0; j < cntColumns; j++){
                        let tab_d = document.createElement('td');
                        k.appendChild(tab_d);
                        //tab_d.innerHTML = currency[i];          
                    }
                }
            }
            
            function insertData(){
                for(let i = 0; i < currency.length; i++){
                    for(let j = 0; j < cntColumns; j++){
                        const info = fetch(currencyAPI + currency[i])
                        .then(response  => response.json())
                        .then((data) => {
                            //TODO: dodac rank, market cap i jakos poprawic pobieranie z api zeby wygladalo lepiej xD
                            let logo = '<img src="images/' + data.id + '.png" width=50 heigth=50/>'
                            tbdata = [0, logo , data.id, data.market_data.current_price.pln, 0]
                            console.log(currency[i] + " : " + data.market_data.current_price.pln + " zl");
                            document.getElementById(currency[i] + 'data').childNodes[j].innerHTML = tbdata[j]
                        })
                    .catch(err => console.log(err));
                    }
                }
            }
            createTable();
            insertData();