numDimensions = 0;
numFactTableColumns = 0;

const addDimensionTable = () => {
    numDimensions += 1;

    divId = 'd' + numDimensions;
    dimensionNameId = 'dname' + numDimensions;
    dataLocationNameId = 'dlname' + numDimensions;
    
    parent = document.getElementById("dimensions");

    dimensionDiv = document.createElement("div");
    dimensionDiv.setAttribute('id', divId);
    dimensionDiv.setAttribute('class', 'dimension');
    
    dimensionLabel = document.createElement("label");
    dimensionLabel.setAttribute('for', dimensionNameId);
    dimensionLabel.textContent = "Dimension Name";

    dimension = document.createElement("input");
    dimension.setAttribute('id', dimensionNameId);
    dimension.setAttribute('name', dimensionNameId);
    dimension.setAttribute('type', 'text');
    dimension.setAttribute('class', 'dimensionName');

    dataLocationLabel = document.createElement("label");
    dataLocationLabel.setAttribute('for', dataLocationNameId);
    dataLocationLabel.textContent = "Data Location"; // TO DO folder opener

    dataLocationEl = document.createElement("input");
    dataLocationEl.setAttribute('id', dataLocationNameId);
    dataLocationEl.setAttribute('name', dataLocationNameId);
    dataLocationEl.setAttribute('type', 'text');
    dataLocationEl.setAttribute('class', 'dataLocation');


    addFieldButton = document.createElement("input");
    addFieldButton.setAttribute('type', 'button');
    addFieldButton.setAttribute('onclick', 'addDimensionField(this)');
    addFieldButton.setAttribute('value', 'Add Field');

    fieldsDiv = document.createElement("div");
    fieldsDiv.setAttribute('id', divId + 'f');

    
    parent.appendChild(dimensionDiv)

    dimensionDiv.appendChild(dimensionLabel);
    dimensionDiv.appendChild(dimension);

    dimensionDiv.appendChild(dataLocationLabel);
    dimensionDiv.appendChild(dataLocationEl);
    
    
    dimensionDiv.appendChild(addFieldButton);
    dimensionDiv.appendChild(fieldsDiv);


}

const addDimensionField = (elRef) => {
    parentDivId = elRef.parentNode.id;

    fieldsDiv = document.getElementById(parentDivId + 'f');
    numFields = fieldsDiv.childElementCount;
    numFields += 1;

    fieldDivId = parentDivId + 'f' + numFields;
    isPKId = fieldDivId + '_isPK';
    nameId = fieldDivId + '_name';
    typeId = fieldDivId + '_type';


    fieldDiv = document.createElement("div");
    fieldDiv.setAttribute('id', fieldDivId);
    fieldDiv.setAttribute('class', 'dimensionField');


    // PK
    isPKLabel = document.createElement("label");
    isPKLabel.setAttribute('for', isPKId);
    isPKLabel.textContent = "Is primary key?";

    isPKEl = document.createElement("input");
    isPKEl.setAttribute('id', isPKId);
    isPKEl.setAttribute('name', isPKId);
    isPKEl.setAttribute('type', 'checkbox');
    isPKEl.setAttribute('class', 'pk');


    // Name
    nameLabel = document.createElement("label");
    nameLabel.setAttribute('for', nameId);
    nameLabel.textContent = "Name";

    nameEl = document.createElement("input");
    nameEl.setAttribute('id', nameId);
    nameEl.setAttribute('name', nameId);
    nameEl.setAttribute('type', 'text');
    nameEl.setAttribute('class', 'name');



    // Type
    typeLabel = document.createElement("label");
    typeLabel.setAttribute('for', typeId);
    typeLabel.textContent = "Type";

    typeEl = document.createElement("input");
    typeEl.setAttribute('id', typeId);
    typeEl.setAttribute('name', typeId);
    typeEl.setAttribute('type', 'text');
    typeEl.setAttribute('class', 'type');


    fieldDiv.appendChild(isPKEl);
    fieldDiv.appendChild(isPKLabel);

    fieldDiv.appendChild(nameLabel);
    fieldDiv.appendChild(nameEl);

    fieldDiv.appendChild(typeLabel);
    fieldDiv.appendChild(typeEl);

    fieldsDiv.appendChild(fieldDiv);

}

// const addFTColumn = () => {
//     parentDivId = "ft_columns";
//     parentDiv = document.getElementById(parentDivId);

//     numFactTableColumns += 1;
//     columnDivId = parentDivId + numFactTableColumns;
    
    
//     fkId = columnDivId + '_fk';
//     nameId = columnDivId + '_name';
//     typeId = columnDivId + '_type';


//     ftColumnDiv = document.createElement("div");
//     ftColumnDiv.setAttribute('id', columnDivId);


//     // PK
//     fkLabel = document.createElement("label");
//     fkLabel.setAttribute('for', fkId);
//     fkLabel.textContent = "Foreign key";

//     fkEl = document.createElement("input");
//     fkEl.setAttribute('id', fkId);
//     fkEl.setAttribute('name', fkId);
//     fkEl.setAttribute('type', 'text'); // TO DO Dropdown from list of dimensions


//     // Name
//     nameLabel = document.createElement("label");
//     nameLabel.setAttribute('for', nameId);
//     nameLabel.textContent = "Name";

//     nameEl = document.createElement("input");
//     nameEl.setAttribute('id', nameId);
//     nameEl.setAttribute('name', nameId);
//     nameEl.setAttribute('type', 'text');


//     // Type
//     typeLabel = document.createElement("label");
//     typeLabel.setAttribute('for', typeId);
//     typeLabel.textContent = "Type";

//     typeEl = document.createElement("input");
//     typeEl.setAttribute('id', typeId);
//     typeEl.setAttribute('name', typeId);
//     typeEl.setAttribute('type', 'text');


//     ftColumnDiv.appendChild(fkLabel);
//     ftColumnDiv.appendChild(fkEl);

//     ftColumnDiv.appendChild(nameLabel);
//     ftColumnDiv.appendChild(nameEl);

//     ftColumnDiv.appendChild(typeLabel);
//     ftColumnDiv.appendChild(typeEl);

//     parentDiv.appendChild(ftColumnDiv);

// }

const addFTColumn = () => {
    let xmldata = ['<?xml version="1.0"?>'];
    xmldata.push("<sdwh-schema>");
    
    let form = document.getElementById("schema_form");
    // let dimensions = document.getElementById("dimensions");
    // let ft_columns = document.getElementById("ft_columns");
    // let emitter_loc = document.getElementById("emitter_loc");
    // let aggregates = document.getElementById("aggregates");
    // let window_config = document.getElementById("window_config");

    xmldata.push("<dimensions>");

    $('#dimensions .dimension').each((i1, el1) => {
        let dimension = $(el1);
        
        let dimensionName = $(dimension.children(".dimensionName")[0]).val();
        let dataLocation = $(dimension.children(".dataLocation")[0]).val();
        xmldata.push('<d name="' + dimensionName + '">');

        $(dimension.find(".dimensionField")).each((i3, e3) => {
            let dimensionField = $(e3);

            let isPk = $(dimensionField.children(".pk")[0]).is(":checked");
            let name = $(dimensionField.children(".name")[0]).val();
            let type = $(dimensionField.children(".type")[0]).val();

            xmldata.push('<field is-pk="' + isPk + '">');
            xmldata.push('<name>' + name + '</name>');
            xmldata.push('<type>' + type + '</type>');
            xmldata.push('</field>');
        });
        xmldata.push('<data-loc>' + dataLocation + '</data-loc>');
        xmldata.push('</d>');
    })
    xmldata.push("</dimensions>");

    

    // for(let i=0;i<inputs.length;i++){
    //     let el=document.createElement("ELEMENT");
    // if (inputs[i].name){
    //     el.setAttribute("name",inputs[i].name);
    //     el.setAttribute("value",inputs[i].value);
    //     xmldata.push(el.outerHTML);
    // }

    // }
    // xmldata.push("</form>");
    // return xmldata.join("\n");


    let xmldoc = xmldata.join("\n")
    
    console.log(xmldoc)

}