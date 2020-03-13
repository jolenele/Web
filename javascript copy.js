function photo_change()
{
     document.getElementById("img_item").src = document.item_form.item_select.options[document.item_form.item_select.selectedIndex].getAttribute('rel');
     var item_desc = document.getElementById("item_text");
     item_desc.innerText = document.item_form.item_select.options[document.item_form.item_select.selectedIndex].value; 
 
}


function photo_change2()
{
     document.getElementById("img_outlet").src = document.outlet_form.outlet_select.options[document.outlet_form.outlet_select.selectedIndex].getAttribute('rel'); 
}


function item_sales()
{
     document.getElementById("item_des").src = document.item_sales_form.item_sales_select.options[document.item_sales_form.item_sales_select.selectedIndex].value; 
}


function item_type()
{
     document.getElementById("img_item_type").src = document.item_type_form.item_type_select.options[document.item_type_form.item_type_select.selectedIndex].value; 
}

function item_des_change(){
    // var item = document.getElementById("");
    var item_des = document.getElementById("item_description");
    if(document.item_form.item_select.options[document.item_form.item_select.selectedIndex].value == "Fat Content"){
        item_des.innerHTML = "Item fat content";
    }
}


// function priceText(sel)
// {
//     var listingType = document.getElementById('listingtype');
//     var priceDesc = document.getElementById('pricedesc');
//     if ( sel.options[sel.selectedIndex].value == "Residential Letting" ) {
//     priceDesc = "Enter price per month";
//     }
//     else if ( sel.options[sel.selectedIndex].value == "Short Let" ) {
//     priceDesc = "Enter price per week";
//     }
//     else if ( sel.options[sel.selectedIndex].value == "Serviced Accommodation" ) {
//     priceDesc = "Enter price per week";
//     }
//     else if ( sel.options[sel.selectedIndex].value == "Sale" ) {
//     priceDesc = "Enter for sale price";
//     }

// } 
// priceDesc.innerHTML = "Enter price per month";

// <label>Listing Type:</label>
// <select name="listingtype" id="listingtype" onchange="priceText(this);">
//     <option value="Residential Letting">Residential Letting</option>
//     <option value="Short Let">Short Let</option>
//     <option value="Serviced Accommodation">Serviced Accommodation</option>
//     <option value="Sale">Sale</option>
// </select>


// <label>Price:</label>
// <p id="pricedesc">Enter price</p>
// <input name="price" type="text" id="price" value="<%=Request.Form("price")%>" maxlength="10" />
