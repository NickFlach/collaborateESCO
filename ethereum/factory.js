import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xa6A42798bdcc8e0DaD8432146cbD5DBE666C6A02'
);

export default instance;
