import React from 'react';

import './jobs.scss';
import ForasHeroImage from '../../../components/ForasHeroImage';
import ForasFilterJobs from '../../../components/ForasFilterJobs';

const hero_img = require('../../../assets/images/map-hero.png');
const img_map_footer = require('../../../assets/images/map-footer.png');

class ForasJobs extends React.Component {
    constructor(props) {
        super();
        this.state = {
            jobs: [],
        }
    }

    componentDidMount() {
        global.sortObj = {
            orderBy: null,
            orderDirection: 'ASC',
            search: null
        };
    }

    getJobs = () => {
    }

    handleSearch = (search) => {
        global.sortObj.search = search;
        this.getJobs();
    }

    handleSort = () => {
        this.getJobs();
    }

    render() {
        return (
            <div className="main">
                <ForasHeroImage src={hero_img} footer={false} handleSearch={this.handleSearch} />
                <ForasFilterJobs data={this.state.jobs} handleSort={this.handleSort} />
            </div>
        );
    }
}

export default ForasJobs;