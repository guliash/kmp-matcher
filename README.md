kmp-matcher
=====

Knuth Morris Pratt algorithm's realisation in js

Example

```
var kmp = require('kmp-matcher');
kmp.kmp('aabbaaccdsbbaab', 'a'); // returns an array of positions of all occurrences [0, 1, 4, 5, 12, 13]
```