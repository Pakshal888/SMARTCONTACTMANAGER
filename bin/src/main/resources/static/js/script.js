console.log("this is java script file");
const toggleSidebar = () => {
    const sidebar = $('.sidebar');
    const content = $('.content');
    if (sidebar.is(":visible")) {
        sidebar.hide();
        content.css("margin-left", "0%");
    } else {
        sidebar.show();
        content.css("margin-left", "20%");
    }
};
const search = () => {
    let query = $("#search-input").val();
    if (query === "") {
        $(".search-result").hide();
    } else {
        console.log(query);
        // sending request to server
        let url = `http://localhost:4040/search/${query}`;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let text = `<div class='list-group'>`;
                if (data.length > 0) {
                    data.forEach((contact) => {
                        text += `<a href='/user/${contact.cId}/contact' class='list-group-item list-group-item-action'>${contact.name}</a>`;
                    });
                } else {
                    text += `<p class='list-group-item'>No results found</p>`;
                }
                text += `</div>`;
                $(".search-result").html(text).show();
            })
            .catch(error => {
                console.error('Error fetching search results:', error);
                $(".search-result").html(`<p class='list-group-item text-danger'>Error fetching results</p>`).show();
            });
    }
};