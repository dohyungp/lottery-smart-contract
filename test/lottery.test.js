const Lottery = artifacts.require("Lottery");

// Truffle은 Mocha + Chai를 Smart Contract에 맞춰 사용할 수 있게 만들어져 있다.
contract('Lottery', function([deployer, user1, user2]){
    // deployer는 0번 주소, user1은 1번 주소, user2는 2번 주소가 들어온다.
    // argument는 최대 10개까지 가능하다.

    let lottery;
    beforeEach(async () => {
        // migration한 후 테스트하는 것보다는 컨트랙트를 다시 배포하고 테스트하는 것을 권장한다.
        // Lottery를 스마트 컨트랙트에 배포한다.
        lottery = await Lottery.new();
    })

    it('getSomeValue의 값은 5여야 한다.', async () => {
        let value = await lottery.getSomeValue();
        assert.equal(5, value);
    })

    it('owner는 deployer와 같아야 한다', async () => {
        let owner = await lottery.owner();
        assert.equal(deployer, owner);
    })
})