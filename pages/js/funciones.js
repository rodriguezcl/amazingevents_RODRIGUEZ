const fragment = document.createDocumentFragment();

export const createCards = (array, contenedor) => {
    contenedor.innerHTML = ""
    array.forEach((evento) => {
        let div = document.createElement('div');
        div.innerHTML += `<div class="col">
          <div class="card h-100">
          <img src="${evento.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                          <h5 class="card-title">${evento.name}</h5>
                          <p class="card-text">Category: ${evento.category}</p>
                      </div>
                      <div class="card-footer">
                          <small class="text-muted">Price: $${evento.price}</small>
                          <a type="button" class="btn btn-primary btn-sm" href="./pages/details.html">See more</a>
                      </div>
                      </div>
                  </div>
                  `
        fragment.appendChild(div)
    })
    contenedor.appendChild(fragment)
}

export const createCategories = (array) => {
    let categories = array.map(category => category.category)

    categories = categories.reduce((acumulador, elemento) => {
        if (!acumulador.includes(elemento)) {
            acumulador.push(elemento);
        }
        return acumulador
    }, [])
    return categories
}

export const createChecks = (array, container) => {
    array.forEach(category => {
        let div = document.createElement('div');
        div.innerHTML += `<div class="category checks-container ${category.toLowerCase()}">
                          <input class="form-check-input" type="checkbox" value="" id="${category.toLowerCase()}">
                          <label class="form-check-label" for="${category.toLowerCase()}">
                              ${category}
                          </label>
      
                      </div>
                      `
        fragment.appendChild(div)
    })
    container.appendChild(fragment)
}

export const filterSearch = (array, value) => {
    let filteredArray = array.filter(element => element.name.toLowerCase().includes(value.toLowerCase()))
    return filteredArray
}

export const filterChecks = (array) => {
    let checked = document.querySelectorAll('input[type="checkbox"]:checked');
    let filteredArray = array.filter(element => Array.from(checked).some(check => check.id.toLowerCase() === element.category.toLowerCase()));
    return filteredArray
}

export const filterAndPrint = (array) => {
    let arrayFiltered = filterSearch(array, $search.value)
    arrayFiltered = filterChecks(arrayFiltered)
    return arrayFiltered
}
