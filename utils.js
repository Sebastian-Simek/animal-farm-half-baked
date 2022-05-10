export function findById(id, data) {
    // for (id of data)
    return data.find((item) => item.id === id);
}
