//     <form id="js-shopping-list-form">
//       <label for="shopping-list-entry">Add an item</label>
//       <input type="text" name="shopping-list-entry" id="shopping-list-entry" placeholder="e.g., broccoli">
//       <button type="submit">Add item</button>
//     <ul class="shopping-list">
//       <li>
//         <span class="shopping-item">apples</span>
//         <div class="shopping-item-controls">
//           <button class="shopping-item-toggle">
//             <span class="button-label">check</span>
//           </button>
//           <button class="shopping-item-delete">
//             <span class="button-label">delete</span>
//           </button>
//         </div>
//       </li>

  $(function() {
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      let newItem = [];
      newItem.push($('#shopping-list-entry'));
      $("ul").append("<li>" + newItem + "</li>")
    }
  )
  $('.shopping-item-delete').click(function() {
    $("#shopping-list").closest('li').remove();
  });

  $(".shopping-item-toggle").click(function(){
    $("#shopping-list").closest('li').toggle();
  });
})


//   function getItem(state, itemIndex) {
//     return state.items[itemIndex];
//   }
  
//   function deleteItem(state, itemIndex) {
//     state.items.splice(itemIndex, 1);
//   }
  
//   function updateItem(state, itemIndex, newItemState) {
//     state.items[itemIndex] = newItemState;
//   }
  
//   // DOM manipulation
  
//   function renderItem(item, itemId, itemTemplate, itemDataAttr) {
//     var element = $(itemTemplate);
//     element.find('.js-shopping-item').text(item.displayName);
//     if (item.checkedOff) {
//       element.find('.js-shopping-item').addClass('shopping-item__checked');
//     }
//     element.find('.js-shopping-item-toggle')
//     element.attr(itemDataAttr, itemId);
//     return element;
//   }
  
//   function renderList(state, listElement, itemDataAttr) {
//     var itemsHTML = state.items.map(
//       function(item, index) {
//         return renderItem(item, index, listItemTemplate, itemDataAttr);
//     });
//     listElement.html(itemsHTML);
//   }
  
  
//   // Event listeners
  
//   function handleItemAdds(
//     formElement, newItemIdentifier, itemDataAttr, listElement, state) {
  
//     formElement.submit(function(event) {
//       event.preventDefault();
//       var newItem = formElement.find(newItemIdentifier).val();
//       addItem(state, newItem);
//       renderList(state, listElement, itemDataAttr);
//       // reset form
//       this.reset();
//     });
//   }
  
//   function handleItemDeletes(
//     formElement, removeIdentifier, itemDataAttr, listElement, state) {
  
//     listElement.on('click', removeIdentifier, function(event) {
//       var itemIndex = parseInt($(this).closest('li').attr(itemDataAttr));
//       deleteItem(state, itemIndex);
//       renderList(state, listElement, itemDataAttr);
//     })
//   }
  
  
//   function handleItemToggles(
//     listElement, toggleIdentifier, itemDataAttr, state) {
  
//     listElement.on('click', toggleIdentifier, function(event) {
//       var itemId = $(event.currentTarget.closest('li')).attr(itemDataAttr);
//       var oldItem = getItem(state, itemId);
  
//       updateItem(state, itemId, {
//         displayName: oldItem.displayName,
//         checkedOff: !oldItem.checkedOff
//       });
//       renderList(state, listElement, itemDataAttr)
//     });
//   }
  
  
//   $(function() {
//     var formElement = $('#js-shopping-list-form');
//     var listElement = $('.js-shopping-list');
  
//     // from index.html -- it's the id of the input
//     // containing shopping list items
//     var newItemIdentifier = '#js-new-item';
  
//     // from `listItemTemplate` at top of this file. for each
//     // displayed shopping list item, we'll be adding a button
//     // that has this class name on it
//     var removeIdentifier = '.js-shopping-item-delete';
  
//     // we'll use this attribute to store the id of the list item
//     var itemDataAttr = 'data-list-item-id';
  
//     //
//     var toggleIdentifier = '.js-shopping-item-toggle'
  
//     handleItemAdds(
//       formElement, newItemIdentifier, itemDataAttr, listElement, state);
//     handleItemDeletes(
//       formElement, removeIdentifier, itemDataAttr, listElement, state);
//     handleItemToggles(listElement, toggleIdentifier, itemDataAttr, state);