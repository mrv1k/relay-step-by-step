# Rough notes taken from reading [relay.dev@12.0.0](https://relay.dev/docs/)

Disclaimer:
This a personal paper notes transcript and likely won't make any sense.
If you still want to go ahead, here's some info to help you make sense of it:
1. Notes are taken chronologically, latter overrides former
2. *Italics stating with "Hmmm."* - thoughts written down

---

+ Relay couples React with GraphQL
+ What are the benefits?
  + Allows to use localized data in component
+ Why does it exist?
  + GraphQL with React doesn't scale well

---

prefix: a beautifully written piece of documentation, pleasure to read

[Thinking in GraphQL](https://relay.dev/docs/principles-and-architecture/thinking-in-graphql/)
+ Relay caches GraphQL responses as a Flat Map of Maps
+ Relay detects cache overlaps and avoids duplication
+ Relay achieves UI consistency by maintaining UI to ID mapping references
+ _Hmmm. Relay feels like it **relies** heavily on event driven architecture._

---
[Thinking in Relay](https://relay.dev/docs/principles-and-architecture/thinking-in-relay/)

+ Fetching data for a view
  + 2 available options:
    + declare every dependency at root
      + problem is coupling
    + declare dependencies at component level
      + problem is rendering in stages (sometimes called waterfalls)
  + Relay uses the best of both approaches
    + declare at component level
    + combine (coalesce) in a single query
    + *and determines all this* statically!
+ Data masking - Relay provides access only to explicitly requested data
+ > \[Relay\] framework provide declarative data fetching.


