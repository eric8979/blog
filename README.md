# Memo

## types of websites (check [net ninja video](https://www.youtube.com/watch?v=Qms4k6y7OgI&list=RDCMUCW5YeuERMmlnqo4oq8vwUpg&start_radio=1&rv=Qms4k6y7OgI&t=25))

- static website (SEO👍, speed & update👎)

  - uses static HTML pages, uploaded to a CDN / web host

- single page application (SEO👎, speed & update👍)

  - typical react/vue website
  - only a single server request made for the initial(empty) HTML page
  - everything else (routing, data) is handled by the SPA in the browser

- static site generator (SEO & speed & update👍) - Gatsby
  - compiled at build time (before deployment)
  - made with react/vue
  - after initial request, the site behaves like a SPA
