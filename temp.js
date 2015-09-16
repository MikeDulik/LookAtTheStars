// /*temp holder for prev index.html*/
//
// <div class="container-fluid">
//   <div class = "row">
//     <div class = "col-md-2">
//       <!--Sidebar content-->
//
//       Search: <input ng-model="query">
//       Sort by:
//       <select ng-model="orderProp">
//         <option value="name">Alphabetical</option>
//         <option value="distance">Closest Distance</option>
//         <option value="-distance">Farthest Distance</option>
//       </select>
//     </div>
//     <div class = "col-md-10">
//       <!--Body content-->
//
//       <ul class="stars">
//         <li ng-repeat="star in stars | filter:query | orderBy:orderProp" class="thumbnail">
//           <a href="#/stars/{{star.id}}" class="thumb"><img ng-src="{{star.imageUrl}}"></a>
//           <a href="#/stars/{{star.id}}">{{star.name}}</a>
//           <p>{{star.snippet}}</p>
//           <p>Approximately {{star.distance}} light years from our Sun.</p>
//         </li>
//       </ul>
//
//       <!-- <p>Total number of stars in local array: {{stars.length}}</p> -->
//     </div>
//   </div>
// </div>
