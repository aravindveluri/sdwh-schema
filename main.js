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
    
    dimensionLabel = document.createElement("label");
    dimensionLabel.setAttribute('for', dimensionNameId);
    dimensionLabel.textContent = "Dimension Name";

    dimension = document.createElement("input");
    dimension.setAttribute('id', dimensionNameId);
    dimension.setAttribute('name', dimensionNameId);
    dimension.setAttribute('type', 'text');

    dataLocationLabel = document.createElement("label");
    dataLocationLabel.setAttribute('for', dataLocationNameId);
    dataLocationLabel.textContent = "Data Location"; // TO DO folder opener

    dataLocationEl = document.createElement("input");
    dataLocationEl.setAttribute('id', dataLocationNameId);
    dataLocationEl.setAttribute('name', dataLocationNameId);
    dataLocationEl.setAttribute('type', 'text');


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


    // PK
    isPKLabel = document.createElement("label");
    isPKLabel.setAttribute('for', isPKId);
    isPKLabel.textContent = "Is primary key?";

    isPKEl = document.createElement("input");
    isPKEl.setAttribute('id', isPKId);
    isPKEl.setAttribute('name', isPKId);
    isPKEl.setAttribute('type', 'checkbox');


    // Name
    nameLabel = document.createElement("label");
    nameLabel.setAttribute('for', nameId);
    nameLabel.textContent = "Name";

    nameEl = document.createElement("input");
    nameEl.setAttribute('id', nameId);
    nameEl.setAttribute('name', nameId);
    nameEl.setAttribute('type', 'text');


    // Type
    typeLabel = document.createElement("label");
    typeLabel.setAttribute('for', typeId);
    typeLabel.textContent = "Type";

    typeEl = document.createElement("input");
    typeEl.setAttribute('id', typeId);
    typeEl.setAttribute('name', typeId);
    typeEl.setAttribute('type', 'text');


    fieldDiv.appendChild(isPKEl);
    fieldDiv.appendChild(isPKLabel);

    fieldDiv.appendChild(nameLabel);
    fieldDiv.appendChild(nameEl);

    fieldDiv.appendChild(typeLabel);
    fieldDiv.appendChild(typeEl);

    fieldsDiv.appendChild(fieldDiv);

}

const addFTColumn = () => {
    parentDivId = "ft_columns";
    parentDiv = document.getElementById(parentDivId);

    numFactTableColumns += 1;
    columnDivId = parentDivId + numFactTableColumns;
    
    
    fkId = columnDivId + '_fk';
    nameId = columnDivId + '_name';
    typeId = columnDivId + '_type';


    ftColumnDiv = document.createElement("div");
    ftColumnDiv.setAttribute('id', columnDivId);


    // PK
    fkLabel = document.createElement("label");
    fkLabel.setAttribute('for', fkId);
    fkLabel.textContent = "Foreign key";

    fkEl = document.createElement("input");
    fkEl.setAttribute('id', fkId);
    fkEl.setAttribute('name', fkId);
    fkEl.setAttribute('type', 'text'); // TO DO Dropdown from list of dimensions


    // Name
    nameLabel = document.createElement("label");
    nameLabel.setAttribute('for', nameId);
    nameLabel.textContent = "Name";

    nameEl = document.createElement("input");
    nameEl.setAttribute('id', nameId);
    nameEl.setAttribute('name', nameId);
    nameEl.setAttribute('type', 'text');


    // Type
    typeLabel = document.createElement("label");
    typeLabel.setAttribute('for', typeId);
    typeLabel.textContent = "Type";

    typeEl = document.createElement("input");
    typeEl.setAttribute('id', typeId);
    typeEl.setAttribute('name', typeId);
    typeEl.setAttribute('type', 'text');


    ftColumnDiv.appendChild(fkLabel);
    ftColumnDiv.appendChild(fkEl);

    ftColumnDiv.appendChild(nameLabel);
    ftColumnDiv.appendChild(nameEl);

    ftColumnDiv.appendChild(typeLabel);
    ftColumnDiv.appendChild(typeEl);

    parentDiv.appendChild(ftColumnDiv);

}