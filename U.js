function getU(array1, array2)
{

    var observations = [];

    for(let value of array1)
    {
        observations.push({group:1,value});
    }

    for(let value of array2)
    {
        observations.push({group:2,value});
    }

    // Rank observations

    observations.sort((a,b)=>a.value - b.value)

    for(let i=0; i<observations.length; i++)
    {
        observations[i].rank = i+1;
    }


    //Sum ranks for each group

    var R1 = observations.filter(o=>o.group == 1).map(o=>o.rank).reduce((a,b)=>a+b,0);
    var R2 = observations.filter(o=>o.group == 2).map(o=>o.rank).reduce((a,b)=>a+b,0);

    // Calculate U values

    var n1 = array1.length;
    var n2 = array2.length;

    var U1 = n1*n2 + n1*(n1+1)/2 - R1;
    var U2 = n1*n2 + n2*(n2+1)/2 - R2;

    var U = Math.min(U1,U2);

    return U;
}