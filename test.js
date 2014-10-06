var t = require('tape');
var kmp = require('./kmpjs');

t('test-kmp-1', function(t) {
    var result = kmp.kmp('aabbaaccdsbbaab', 'ab');
    var need = [1, 13];
    t.same(result, need);
    t.end();
});

t('test-kmp-2', function(t) {
    var result = kmp.kmp('aabbaaccdsbbaab', 'a');
    var need = [0, 1, 4, 5, 12, 13];
    t.same(result, need);
    t.end(); 
});

t('test-prefix-function-1', function(t) {
    var result = kmp.calcPrefixFunction('aabccaabcdeaac');
    var need = [-1, 0, -1, -1, -1, 0, 1, 2, 3, -1, -1, 0, 1, -1];
    t.same(result, need);
    t.end();
});