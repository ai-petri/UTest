function createTable(arr)
{
    var names = new Set();
    for(let obj of arr)
    {
        for(let key of Object.keys(obj))
        {
            names.add(key);
        }
    }

    var table = document.createElement("table");

    var thead = document.createElement("thead");
    var header = document.createElement("tr");
    for(let name of names)
    {
        let th = document.createElement("th");
        th.innerText = name;
        header.append(th);
    }
    thead.append(header);
    table.append(thead);

    var tbody = document.createElement("tbody");
    for(let obj of arr)
    {
        let tr = document.createElement("tr");
        for(let name of names)
        {
            let td = document.createElement("td");
            td.innerText = obj[name];
            tr.append(td);
        }
        tbody.append(tr);
    }
    table.append(tbody);

    return table;

}