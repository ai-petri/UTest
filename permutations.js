function getPermutations(array)
{
    if(array.length <= 1) return [array];

    let permutations = [];
    for(let i=0; i<array.length; i++)
    {
        for(let permutation of getPermutations([...array.slice(0,i), ...array.slice(i+1)]))
        {
            permutations.push([array[i], ...permutation])
        }
    }
    return permutations;
}