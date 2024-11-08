function getPValues(n1,n2)
{
    let ranks = Array(n1+n2).fill(0).map((o,i)=>i+1);
    
    let permutations = getPermutations(ranks);
    let UValues = [];
    for(let permutation of permutations)
    {
        let R1 = permutation.slice(0,n1).reduce((a,b)=>a+b,0);
        let R2 = permutation.slice(n1,n1+n2).reduce((a,b)=>a+b,0);
        let U1 = n1*n2 + n1*(n1+1)/2 - R1;
        let U2 = n1*n2 + n2*(n2+1)/2 - R2;
        let U = Math.min(U1,U2);
        
        let found = UValues.find(o=>o.U == U);
        if(found)
        {
            found.count++;
        }
        else
        {
            UValues.push({U,count:1});
        }
    }
    for(let UValue of UValues)
    {
        UValue.p = UValue.count / permutations.length;
    }
    return UValues;
 
}