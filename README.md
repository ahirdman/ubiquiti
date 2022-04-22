## Ubiquiti Device Access

This application allows users to lookup Ubiquiti devices and details by searching for product names and/or filter by product line.

## Developer Tools

This application is built with React, React Router and TypesScript.\
Sass is used to keep the css DRY and easily modified.\
ESlint with AirBnb config to catch misstakes from fast fingers.\
Should the application not run on your machine for any reason, create a Docker image and run a container instead.\
Express is used to serve the build files in production.\
This application is deployed with Heroku. Visit [here!](https://ubirocks.herokuapp.com)

## Upcoming Additions and Features

- Unit & E2E tests
- Pagination
  - 430 Devices does not need to be shown at the same time.
- Search field
  - Autocomplete based on fetched devices
  - Search history
- Filter function
  - Allow users to clear filter when filter box is not showing
- Images
  - Make the device images appear faster when the user has clicked a device
- User feedback
  - Should the API fail, give the user information about such event. At the moment the list/grid is blank.
  - Convert icons from img elements to svg or object elements. This will allow css to use "fill" and change color on hover for desktop users.

## Scripts

To run a development server, type "npm run dev"
