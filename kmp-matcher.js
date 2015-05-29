(function() {
    var kmp_matcher = {
        kmp: function(s, p) {
            var n = s.length;
            var m = p.length;
            var prefix = kmp_matcher.calcPrefixFunction(p);
            var res = [];
            var q = -1;
            for(var i = 0; i < n; i++) {
                while(q >= 0 && p[q + 1] != s[i]) {
                    q = prefix[q];
                }
                if(p[q + 1] == s[i]) {
                    q++;
                }
                if(q == m - 1) {
                    res.push(i - m + 1);
                    q = prefix[q];
                }
            }
            return res;
        },
        calcPrefixFunction: function(p) {
            var n = p.length;
            var prefix = [];
            var q = -1;
            prefix.push(q);
            for(var i = 1; i < n; i++) {
                while(q >= 0 && p[q + 1] != p[i]) {
                    q = prefix[q];
                }
                if(p[q + 1] == p[i]) {
                    q++;
                }
                prefix[i] = q;
            }
            return prefix;
        },
    };
    if (typeof define === 'function' && define.amd) define(function() { return kmp_matcher; });
    else if (typeof module !== 'undefined') module.exports = kmp_matcher;
    else if (typeof self !== 'undefined') self.kmp_matcher = kmp_matcher;
    else window.kmp_matcher = kmp_matcher;
})();