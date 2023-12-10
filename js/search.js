const keyword = document.getElementById('searchInput')
const items = document.querySelectorAll('berita')

keyword.addEventListener("input", (e) => searchData(e.target.value))

function searchData(search) {
    items.forEach((item) => {
        if (item.innerText.toLowerCase().includes(search.toLowerCase())){
            item.classlist.remove("d-none")
        }
        else{
            item.classlist.add("d-none")
        }
    })
}