import React from "react";

export const PlaySVG = () => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const StopSVG = () => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

export const RightSVG = () => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M9 5l7 7-7 7"></path>
  </svg>
);

export const LeftSVG = () => (
  <svg
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M15 19l-7-7 7-7"></path>
  </svg>
);

const audio = new Audio(
  "data:audio/wav;base64,UklGRngKAABXQVZFZm10IBAAAAABAAIARKwAABCxAgAEABAAZGF0YVQKAAABAWYB6wB/AeYAkgHTAKwBxgDZAcwAEgLMAEUC2QCLAtkA/QIZAb4DpQF9BDgCkAVQA+cGCQV7CFQHuAr5CosN1Q8hEPcUQBIiGVITLhvmEyMe4BMyH0wRtx2wDY0ajgjZEtL/UQTO95b7EfqSAYn8WQfd+NQHoPc5C+z4eQvF+Xj/l/kK8s71KemU88PqzPjb6zn6euSJ8v3dyenP2DXpHc+a5am7pd12utbfUc7C7G7gcfo/590CFvLKDKf3rRG+72cHt+dD+0Twvvml+iYAFP3JBnf8yAYK+NUH5vYGCmr7bQbLAiYD8gldApQS7AJeFJEDMguvA7r/5APX+/EBR/7H/yH/kPtZAJn27f9Y8dD5aOsh7xfo/Olq6TzyvfI0/3D7Igd1/pMI+AAmCfMAaQKf+QD6xu409frjhO9E3xHwBuSU9eDunfsk/NgB6gP9BJwDCwNV/Sj9XvJ3+oHpaP8o6xYDqvIYArn5jwWG/6UL3AS+DWoFYQ/XA7UR/APaEBcC9Q4VAFcOfgJ7DzYG4g+HBqkLnQTNCv0F6g18B8oKVQUiCJ4COgmTAdsGev+rAvb8cgFB/Z0CTf/NAUcARQESATED5QAh/zb9Fvtw+WP9xfot/a79bPjh/ef2FP9G+AcBmfaz/lz0LPnZ9uX2IPgT97n2nPVa98b1SfqM+L76N/qE+Wz5u/yW/DEEagR/CrgL4w4VEJESZRHGEhEPPg6yCeQLKQXrC+sCbQqaAHoIof7uBVD9EQOP+xQAEPlNAID4nANx+n0EnfoLBXH5lQV++mQDvfuh/i77Vvvm+XH6XvmE+5L5R//X+rcE6fwnCDIAKg3EBEASeQmmEXgLrw0fCqsMGgl8D8YKDRKVDSYTUA8FE8cQZxGuEAMOxA2BCT8K4QamB/YFvQYwBmEHJgi/CPIJGgq1CJ8JWwV6B5ID3AV+AnAFQADVBBv88wJA940A9fPn/hDyTv0d8Z37GPLE+vzzKPse9yn9g/sZAQf/zwSUAIkHSgIyCokFqQ3nCIkQUQxzEpYPfRTSEUsVoRKMEzQRHBFDDqgO0wn/CwEGYAk4BXoI2wQTCGQD0AQNAToBAf85/tT8XvvS+VH45vZa9fTzqvOe8d3xK/Gs8Nfx0fBp8jDxHPSK8r/2PPVm+Mz3K/mQ+ZD56vpj+s/8yftb/+/96wFlAYsDHAWDBIIHYwXACKIFOAovBmwKoQYhCT0GeQgbBuEI4gagCCcG2ggcBUYJSwQ1B1ACcAPt/6QCD/8aAl4Buf/5AaL91P88/cH/Jv+YAXoBnQNeAqME5gEeBeYBzgW4AUgG8AGoB2AChwndA1ELPQV+DKoEygupA0gJGQJHB+wA2gYMAq8HlwPyCaQC3wqTAe4IDQFnB5gAqQZBAA8Fhf8qA0f/BQLn/r4BR/8yAqP+8gGI/N8AXftM/5H5av15+OL7efjQ+uz3U/lN9TL3g/Io9aTxzvMK8jv0C/Ko9dzxofbw8X/35PGf98nx3/ex8kz5lPRp++31ev1m9nv+SPYn/jr2lv1Z9sn8YPYJ/Mj2nvul98n7ZfhD/Dn5/PxQ+qj9EfsN/pb7Nf63++/98Poi/Uv5z/uL+P76k/cr+hP2Pvlu9Qv57vR++dv0EPrh9CT6gvSE+q30vvoD9cP6evU8+4f2C/xe+FT9K/rV/n37uf+2+2H/yvrt/d75PfyE+VD7/fkd+3L6XPtX+pj7d/rP+wn7gfyV+xX9o/tp/H37S/u3++/61vsK+0/8V/sq/Gr71fqR+iT60Pl5+hD67/pE+ur6//mK+gT6avpk+qr6yvqk+5z7b/0w/aD+ev6t/1X/tAA+AD4B+QDGAX8BSwLAAQsDHgIjBAQDxAS3A84EAwS3BBEEDwVdBE8FIgVpBbAFUAXpBakE7wU+BCIGWANWBuQB4gWsAKoEXP93A679OAKC+4AA5Pna/uz49v209zT9ufYW/FP2o/vY9hj84fe6/Cv43Py/91D8Wfeo+8b2N/s69ur6p/Yk+1L3A/yA97T8pvfP/Ob3vPxe+LX8QPhp/BH46fuG+Iv70vji+yX5V/yQ+Xv8C/qo/Hf6t/zw+mn8F/vv+xb7PfsY+5z6nPtr+n38qvrU/Or6Fv1X+wL9V/t2/Mr64/sq+mr7ZfkD+5f40fo5+LD63veX+s336/pk+Ej7+fiW+1L5z/we+kj+UPsz/xz8TgDD/MsBtf2XAyz/XAWGANcGnwE6CLkCWQl2A8cJxQOZCakDYAl+AywJhAPNCF0D2ghEA0cJnQOLCeQDmwnLA6sJqQObCYsDuAlrAxMKiQOZCiQEnwsdBcoMCQa9DeEGQQ41B9AOQgepD80HYRCNCIEQDgm8EKAJVBGRCs0Rkgv5ETgMxxGRDIcRhAx7EVAMDBElDJwQ/gtvEOsLaBD4C9sPnQsPD/MKqg5kCkMOzgmdDdgIqQyjB6wLOwaeCgkFjQnQA80I0gINCAsCLwcsAQ4GQQDdBFL/3QOo/gsDDv4yAmP9ZgHO/NgAnfxZAGr89f8o/LT/Hvws/wP8Af/p+w7/9vs0/+/7W//w+2b/4vuA/9D7jP/P+0//sPsN/4X7FP9d+8f+Hfs6/nb6kP2++dX8APkd/F34ovsn+KX7C/h2+xn4XftG+Fb7bPgj+5n4EPu3+Ff7H/m3+wT6IvwE+7v8L/xW/WP9tf1I/iH+Gf+o/hMAQP/tAOD/cwFaAPIBwAAqAtgAMgK6AAYC5gDxAeYA+AGsAL8BcgBTAXQA8gCNALgAgAB5AHgAQQCAACcAmABMAKIAZwCGADgAfgANAK4ABgDTAPr/+AAHAOwADAC/AAYAswAUALkAMwCmAE4A2AByADkBuwCZAR4B2QFMAQUCUwEqAkUBQAI0AWQCMgH3AlgBZQORAaMDuAHSA7kB/QPZAUME+AFuBOwBqwTwAekEMwIkBUwCNAVkAlEFjAKBBbYCtwXlAsEF6gKJBdoCNgWxAtcEXQIxBPMBlwOFAfcCJQFYArMAuAFMADkBBgCsAMH/8v9U/1z/1P4Z/5r+zv6H/mf+T/7v/Tr+df1a/hT9SP6E/Pv9w/ui/UP7SP3e+hf9ifr7/Cb60PzJ+Yj8WPki/Ob41vux+Lz7mPh9+2z4cPty+D77fvgk+2X4Fvs5+OP6Jfi9+iz4xPos+Bb7C/gx+/L3HfvN9+L6pfe3+pn3qfqb95j6i/ed+oD3uPpt98n6Xvfe+oD39vqf9xj71PdQ+z74ovvG+AP8WPlc/PH5yPx8+iT93fpn/VH7tf37+y3+vPzH/m/9SP/b/Y3/Lv6z/4j++v/b/kYAOf+sAI3/HwHB/2ABDQCGAW0AsgHTAOUBWQFFAtEBngLsAbgC6gG4Av4BxQIzAvACUgIRA14CJgN3Ah4DhQL3AqYC3gKxArkCowKRAoACZQJ9AkoCmQJeArkCpALqAv4CHQNfA2QDogOrA/cD0ANEBNIDNgSwAz4EqwNdBL0DgwTQA5YE6gOKBPYDdgQKBHcE8ANJBJgD5AM+A2oD/QIYA4sCsQL/ASwC"
);

export const beep = () => {
  audio.play();
};