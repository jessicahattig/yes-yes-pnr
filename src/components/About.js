import React from 'react';

const About = () => {
  return (
    <div className="about-section container">
      <br />
      <h2 className="mb-4 custom-heading">Operational Levy</h2>

      <div className="row">
        <div className="col-md-6">
          <p className="lead">For the sustained operation and maintenance of Hood River Valley Parks and Recreation District (HRVPRD), we propose an Operational Levy. This levy, with a length of 5 years and a tax rate of $0.43 per $1,000 assessed value, ensures the continuity of essential services. The estimated annual cost for the average household is $94, contributing to the care of public resources, increased maintenance demands, and the operation of an expanded pool within a community center.</p>
        </div>

        <div className="col-md-6">
          <br />
          <h2 className="mb-4 custom-heading">General Obligation Bond</h2>
          <p className="lead">In addition to the Operational Levy, we seek support for a General Obligation Bond. This 25-year initiative, with a tax rate of $1.27 per $1,000 assessed value, aims to fund significant projects, including the construction of a new pool with a community center and recreation space. The bond will also facilitate the development of Westside Park, the purchase and preservation of Parkdale Park, and the construction of key trail connections. The estimated annual cost for the average household is $279, contributing to the enhancement of recreational facilities and the overall well-being of the community.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
