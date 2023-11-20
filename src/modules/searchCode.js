import { error } from "laravel-mix/src/Log";
import ajaxService from "./ajaxService";

const searchCode=()=>{
    document.querySelector('form').addEventListener('submit',(e)=>{
        e.preventDefault();
        const searchTerm=document.querySelector('.term').value;
        const city=document.querySelector('.city').value;
        let searchResponse;
        ajaxService(searchTerm,city)
            .then(result=>searchResponse=result)
            .then(()=>document.querySelector('.result').value=searchResponse.data[0].post_code)
            .catch(error=>{
                let errorMsg=document.getElementById('error-msg')
                errorMsg.innerText="Tokio adreso nera";
            })
    })
}

export default searchCode