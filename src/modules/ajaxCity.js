const ajaxCity=()=>{
    const datalist=document.getElementById('places');
    fetch('https://api.meteo.lt/v1/places')
        .then(response=>response.json())
        .then(data=>{
            const locationsData=data.map(place=>place.name);
            locationsData.forEach(name=>{
                const option=document.createElement('option');
                option.value=name;
                datalist.appendChild(option);
        });
    });
};

export default ajaxCity