const { addUser, getUserById } = require('./user');
const { createAuction, getAuctionById, placeBid, getBidsForAuction } = require('./auction');


(async () => {
    await addUser({ id: 1, name: 'Alice' });
    await addUser({ id: 2, name: 'Bob' });


    await createAuction({ id: 1, name: 'Leilão de arte', startingPrice: 100 });


    await placeBid(1, 2, 120); // Bob (id: 2) dá um lance de 120 no leilão (id: 1)


    const user = await getUserById(2);
    const auction = await getAuctionById(1);
    const bids = await getBidsForAuction(1);


    console.log('Usuário:', user);
    console.log('Leilão:', auction);
    console.log('Lances:', bids);
})();