// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
import 'hardhat/console.sol';
import {ERC20} from '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import {Ownable} from '@openzeppelin/contracts/access/Ownable.sol';
import {IERC20} from '@openzeppelin/contracts/token/ERC20/IERC20.sol';

// Token contract
contract Token is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}

// TokenSwap contract
contract TokenSwap is Ownable {
    uint256 public constant FEE_PERCENTAGE = 2;
    address public rewardToken;

    constructor(address _rewardToken) Ownable(_rewardToken) {
        rewardToken = _rewardToken;
    }

    function getMaxTransferAmount(
        uint256 amount
    ) public pure returns (uint256) {
        uint256 fee = (amount * FEE_PERCENTAGE) / 100;
        return amount - fee;
    }

    function transferTokens(address token, address to, uint256 amount) public {
        uint256 fee = (amount * FEE_PERCENTAGE) / 100;
        uint256 amountAfterFee = amount - fee;

        IERC20(token).transferFrom(msg.sender, to, amountAfterFee);
        IERC20(token).transferFrom(msg.sender, owner(), fee);
    }

    function getAmountOut(
        address token1,
        address token2,
        uint256 amountIn,
        uint256 price1,
        uint256 price2
    ) public view returns (uint256) {
        uint256 amountOut = (amountIn * price1) / price2;
        uint256 fee = (amountOut * FEE_PERCENTAGE) / 100;
        return amountOut - fee;
    }

    function swapTokens(
        address token1,
        address token2,
        uint256 amountIn,
        uint256 price1,
        uint256 price2
    ) public {
        uint256 amountOut = getAmountOut(
            token1,
            token2,
            amountIn,
            price1,
            price2
        );
        uint256 fee = (amountOut * FEE_PERCENTAGE) / 100;
        uint256 reward = fee / 2;

        IERC20(token1).transferFrom(msg.sender, address(this), amountIn);
        IERC20(token2).transfer(msg.sender, amountOut - fee);
        IERC20(token2).transfer(owner(), fee - reward);
        IERC20(rewardToken).transfer(msg.sender, reward);
    }
}
