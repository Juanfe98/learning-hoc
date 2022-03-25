# High Order Components Exercise

React’s Higher Order Component is a pattern that stems from React’s nature that privileges composition over inheritance.

A few use cases are:

- Infinite scroll in three different views, all having different data

- Components using data from third party subscription

- App components that need logged in user data

- Showing multiple lists(e.g. Users, Locations) with search feature 

- Enhancing different card views with same border and shadow


## Without HOC

Without a HOC now we have to searchList, one for products and the other one for students. 

- StudentListWithSearch 

- ProductListWithSearch 

But we are rewriting some logic on these components in order to make bot of them work. 

## How to create a HOC to optimice this search functionality

1. We are going to create one component to recieve our studentList and ProductList as prop.

2. This component should handle all the logic to search for items in the list

3. We are going to be capable of reusing for students, products and any other list we need to create.