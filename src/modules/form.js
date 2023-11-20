const form=()=>{
    return `
    <div class="form-group">
        <input type="text" class="form-control city" placeholder="Miestas">
    </div>
    <div class="form-group">
        <input type="text" class="form-control term" placeholder="Iveskite savo adresa">
    </div>
    <div class="form-group">
        <input type="text" class="form-control result" readonly>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Ieskoti</button>
    </div>
    `
}

export default form