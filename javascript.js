function photo_change()
{
     document.getElementById("img_item").src = document.item_form.item_select.options[document.item_form.item_select.selectedIndex].getAttribute('rel');
     var item_desc = document.getElementById("item_text");
     item_desc.innerText = document.item_form.item_select.options[document.item_form.item_select.selectedIndex].value; 
 
}


function photo_change2()
{
     document.getElementById("img_outlet").src = document.outlet_form.outlet_select.options[document.outlet_form.outlet_select.selectedIndex].getAttribute('rel'); 
     var outlet_desc = document.getElementById("outlet_text");
     outlet_desc.innerText = document.outlet_form.outlet_select.options[document.outlet_form.outlet_select.selectedIndex].value; 
 }

