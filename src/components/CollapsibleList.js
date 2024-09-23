import './../styles/CollapsibleList.css';

// 현재코드: https://codepen.io/ryomario/pen/XWwRrej
// 참고1(부트스트랩X): https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_treeview
// 참고2(부트스트랩O): https://codepen.io/grzegorz-rogala/pen/YzjgYRa

// rsuite: https://codesandbox.io/p/sandbox/affectionate-swanson-67vm2h?file=%2Findex.js%3A15%2C21
export function CollapsibleList(props) {
  console.log("<ul>");
  console.log(props);
  console.log("<ul>");
  return (
    <>
      <ul className='na-collapsible-list'>
        { props.children }
      </ul>
    </>
  )
}


function Ul({ children, id, className, ...props }) {
  console.log("<li>");
  console.log(props);
  console.log("<li>");

  return (
    <li className='na-collapsible-list-item'>
      {/* <a href='#' class='na-collapsible-list-link'></a> */}
      {children}
    </li>
  )
}

function Li({ children, id, className, ...props }) {
  console.log("<li>");
  console.log(props);
  console.log("<li>");

  return (
    <li className='na-collapsible-list-item'>
      {/* <a href='#' class='na-collapsible-list-link'></a> */}
      {children}
    </li>
  )
}

function Item({ children, id, className, ...props }) {
  console.log("<li>");
  console.log(props);
  console.log("<li>");

  return (
    <li className='na-collapsible-list-item'>
      {/* <a href='#' class='na-collapsible-list-link'></a> */}
      {children}
    </li>
  )
}


// function collapse(willCollapse = true, callback = (list) => {}) {
//   this.collapsing = true;
//   const height = this.scrollHeight;
//   const stateFrom = {height: height + 'px'};
//   const stateTo = {height: '0px'};
  
//   let animateState = [stateFrom, stateTo];
//   if(!willCollapse) animateState = [stateTo, stateFrom];
  
//   this.animate(animateState,{
//     duration:500,
//     iterations:1,
//     easing:'ease-in-out'
//   }).finished.then(val => {
//     this.collapsing = false;
//     if(callback && typeof(callback) == 'function'){
//       callback(this);
//     }
//   });
// }
// const showActiveTab = (tab) => {
//   if(tab){
//     document.querySelector('#active-tab').textContent = tab.textContent;
//   }
// }
// showActiveTab(document.querySelector('.list-item.active'));

// document.querySelectorAll('.list li').forEach(li => {
//     const list = li.querySelector('.list');
//     if(list)list.collapse = collapse.bind(list);
//     li.querySelector('.list-item').addEventListener('click', (event) => {
//         // if not a list (just list-item)
//         if(!list){
//           document.querySelectorAll('.list-item').forEach(listItem => {
//             listItem.classList.remove('active');
//           });
//           event.target.classList.add('active');
//           showActiveTab(event.target);
//           event.preventDefault();
//           return;
//         }
//         // if list still collapsing
//         if(list.collapsing){
//             event.preventDefault();
//             return;
//         }
//         // set list collapse or open
//         if(!list.classList.contains('open')) {
//             list.classList.add('open')
//             list.querySelectorAll('.list').forEach(oList => oList.classList.remove('open'));
//             list.parentElement.parentElement.querySelectorAll('& > li > .list.open').forEach(oList => {
//               if(oList !== list){
//                 oList.collapse(true, ls => {
//                     ls.querySelectorAll('.list').forEach(oList => oList.classList.remove('open'));
//                     ls.classList.remove('open');
//                 });
//               }
//             });
//             // open
//             list.collapse(false);
//         } else {
//             // collapse
//             list.collapse(true, ls => {
//                 ls.querySelectorAll('.list').forEach(oList => oList.classList.remove('open'));
//                 ls.classList.remove('open');
//             });
//         }
//     })
// })

CollapsibleList.Item = Item;