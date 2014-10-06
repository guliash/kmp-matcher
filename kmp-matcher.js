(function() {
    var kmpjs = {
        kmp: function(s, p) {
            var n = s.length;
            var m = p.length;
            var prefix = this.calcPrefixFunction(p);
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
    if (typeof define === 'function' && define.amd) define(function() { return kmpjs; });
    else if (typeof module !== 'undefined') module.exports = kmpjs;
    else if (typeof self !== 'undefined') self.kmpjs = kmpjs;
    else window.kmpjs = kmpjs;
})();