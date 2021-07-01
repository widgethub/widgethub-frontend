# WidgetHub, a new way to widget

Try it out [here](https://widgethub.space/)

## What it does
The purpose of WidgetHut is to provide a quick and intuitive way to build plug and play widgets for your own websites. Simply add your handle, customize how you want your widget to look, and paste the code we give you onto your own site.

## Technologies
WidgetHub’s frontend was built using reactjs with tailwindcss. The backend is a typescript express app that provides both REST and GraphQL endpoints. The frontend communicates to the backend via REST, while the published widgets use the GraphQL endpoints. We are also using PostgreSQL for our database.

## Challenges
We needed to write a lightweight packet of code for our users to include into their website, while still needing to look decent, make GraphQL queries, and remain configurable. This took a bit of pondering to accomplish. The code snippet the user copies includes the main code from our server. We then override variables the main code uses in the snippet, so it remains accessible to be tweaked later.

Getting the live preview of the widget as you are customizing it also took a bit of creativity. We ended up injecting the code into an iframe on every update.

## Accomplishments
In many past hackathons, we always spent a lot of time tumbling over things like cors and getting jwt authentication working. This time was a lot cleaner, and it might be due to our extensive documentation of endpoints, enums and the graphql schema, so frontend and backend had a lot easier time connecting.

## Learning Experience
Our team has very little experience with react, so this hackathon gave us a decent amount of exposure. In addition, we normally don’t pay too much attention to ui, but we gave it a bit more love this hackathon, and are a bit more happy with the results.

## Next steps
An obvious next step would be to expand our library of components with more layouts and customization options. Our infrastructure on the server is also a bit messy. Currently, we have each webapp along with postgres running all together on the vps, so dockerizing them would have been nice.
