document.querySelectorAll(".tag").forEach(tag=>{

    tag.addEventListener("click", ()=>{

        const tagName = tag.dataset.tag;

        const item = instruments[tagName];

        let html = "";

        if(item){

            for(const key in item){

                html += `<p><strong>${key}</strong>: ${item[key]}</p>`;

            }

        }else{

            html = "<p>No data available.</p>";

        }

        document.getElementById("details").innerHTML = html;

    });

});
