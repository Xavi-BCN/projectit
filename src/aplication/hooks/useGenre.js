const useGenres = (selectedGenres) => {
    if(selectedGenres.length < 1) return "";

    const GenredIds = selectedGenres.map((g)=> g.id);
    return GenredIds.reduce((acc, curr)=> acc + "," + curr);
};

export default useGenres;