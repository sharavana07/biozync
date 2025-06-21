// src/pages/C4SuperTreePage.jsx
import React, { useState, useMemo } from 'react';
// import './C4SuperTreePage.css'; // Assuming you have a CSS file for styling
import styles from './C4SuperTreePage.module.css';


function C4SuperTreePage() {
  const [treeCount, setTreeCount] = useState(1000);

  // Constants for tree environmental impact
  const TREE_CONSTANTS = {
    NORMAL_CO2_PER_TREE: 21, // kg/year
    NORMAL_O2_PER_TREE: 118, // kg/year
    C4_MULTIPLIER: 2.5, // More realistic multiplier for C4 efficiency
    GROWTH_RATE_MULTIPLIER: 1.8, // C4 trees grow faster
    WATER_EFFICIENCY: 3 // C4 trees use water more efficiently
  };

  // Calculate environmental impact with useMemo for performance
  const environmentalImpact = useMemo(() => {
    const normalCO2 = treeCount * TREE_CONSTANTS.NORMAL_CO2_PER_TREE;
    const normalO2 = treeCount * TREE_CONSTANTS.NORMAL_O2_PER_TREE;
    const c4CO2 = normalCO2 * TREE_CONSTANTS.C4_MULTIPLIER;
    const c4O2 = normalO2 * TREE_CONSTANTS.C4_MULTIPLIER;
    
    // Additional calculations
    const co2Difference = c4CO2 - normalCO2;
    const o2Difference = c4O2 - normalO2;
    const waterSaved = treeCount * 500 * (TREE_CONSTANTS.WATER_EFFICIENCY - 1); // liters/year
    const equivalentCars = Math.round(co2Difference / 4600); // Average car emits 4.6 tons CO2/year
    
    return {
      normal: { co2: normalCO2, o2: normalO2 },
      c4: { co2: c4CO2, o2: c4O2 },
      difference: { co2: co2Difference, o2: o2Difference },
      waterSaved,
      equivalentCars
    };
  }, [TREE_CONSTANTS.C4_MULTIPLIER, TREE_CONSTANTS.NORMAL_CO2_PER_TREE, TREE_CONSTANTS.NORMAL_O2_PER_TREE, TREE_CONSTANTS.WATER_EFFICIENCY, treeCount]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toLocaleString();
  };

  const getTreeCountDescription = () => {
    if (treeCount < 100) return "Small grove";
    if (treeCount < 1000) return "Community forest";
    if (treeCount < 5000) return "Small forest";
    if (treeCount < 10000) return "Large forest";
    return "Massive reforestation project";
  };

  return (
    <div className={styles.product1page}>
      <header>
        <h1>🌲 C4 Super Trees</h1>
        <img src="./assets/c4su.jpg" alt="C4 Super Trees in a lush forest environment" />
        <p className="intro">
          Revolutionary <strong>C4 Super Trees</strong> engineered with advanced C4 photosynthesis pathways 
          for unprecedented carbon capture efficiency and accelerated oxygen production. These trees represent 
          the future of sustainable reforestation and climate restoration.
        </p>
      </header>

      <section>
        <h2>🔬 Scientific Advantages</h2>
        <div className={styles.comparison1grid}>
          <div className={styles.feature1card}>
            <h3>🌿 Enhanced Photosynthesis</h3>
            <p>C4 pathway concentrates CO₂ around the enzyme that fixes carbon, dramatically increasing efficiency especially in hot, dry conditions.</p>
          </div>
          
          <div className={styles.feature1card}>
            <h3>💧 Water Efficiency</h3>
            <p>Uses {TREE_CONSTANTS.WATER_EFFICIENCY}× less water per unit of CO₂ captured compared to traditional C3 trees.</p>
          </div>
          
          <div className={styles.feature1card}>
            <h3>🌡️ Climate Resilience</h3>
            <p>Thrives in high temperatures and low water conditions where normal trees struggle.</p>
          </div>
          
          <div className={styles.feature1card}>
            <h3>⚡ Rapid Growth</h3>
            <p>Grows {TREE_CONSTANTS.GROWTH_RATE_MULTIPLIER}× faster than conventional trees, reaching maturity sooner.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>📊 Performance Comparison</h2>
        <div className={styles.comparison1table}>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Normal Trees</th>
                <th>C4 Super Trees</th>
                <th>Improvement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CO₂ Absorption (per tree/year)</td>
                <td>{TREE_CONSTANTS.NORMAL_CO2_PER_TREE} kg</td>
                <td>{(TREE_CONSTANTS.NORMAL_CO2_PER_TREE * TREE_CONSTANTS.C4_MULTIPLIER).toFixed(1)} kg</td>
                <td>+{((TREE_CONSTANTS.C4_MULTIPLIER - 1) * 100).toFixed(0)}%</td>
              </tr>
              <tr>
                <td>O₂ Production (per tree/year)</td>
                <td>{TREE_CONSTANTS.NORMAL_O2_PER_TREE} kg</td>
                <td>{(TREE_CONSTANTS.NORMAL_O2_PER_TREE * TREE_CONSTANTS.C4_MULTIPLIER).toFixed(1)} kg</td>
                <td>+{((TREE_CONSTANTS.C4_MULTIPLIER - 1) * 100).toFixed(0)}%</td>
              </tr>
              <tr>
                <td>Water Usage Efficiency</td>
                <td>Standard</td>
                <td>{TREE_CONSTANTS.WATER_EFFICIENCY}× more efficient</td>
                <td>-{(((TREE_CONSTANTS.WATER_EFFICIENCY - 1) / TREE_CONSTANTS.WATER_EFFICIENCY) * 100).toFixed(0)}% water needed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>🧮 Environmental Impact Calculator</h2>
        <div className={styles.calculator}>
          <div className={styles.slider1container}>
            <label htmlFor="treeRange">
              <strong>Number of Trees:</strong> {treeCount.toLocaleString()} 
              <span className="tree-description">({getTreeCountDescription()})</span>
            </label>
            <input
              type="range"
              id="treeRange"
              min="1"
              max="10001"
              step="3"
              value={treeCount}
              onChange={(e) => setTreeCount(parseInt(e.target.value))}
              className="tree-slider"
            />
            <div className={styles.slider1labels}>
              <span>1</span>
              <span>2,500</span>
              <span>5,000</span>
              <span>7,500</span>
              <span>10,000</span>
            </div>
          </div>

         <div className={styles.results1grid}>
            <div className={styles.result1card + ' ' + styles.normal1trees}>
              <h3>🌳 Normal Trees (Annual Impact)</h3>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.value}>{formatNumber(environmentalImpact.normal.co2)}</span>
                  <span className={styles.unit}>kg CO2 absorbed</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.value}>{formatNumber(environmentalImpact.normal.o2)}</span>
                  <span className={styles.unit}>kg O2 produced</span>
                </div>
              </div>
            </div>

            <div className={styles.result1card + ' ' + styles.c41trees}>
              <h3>🌲 C4 Super Trees (Annual Impact)</h3>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.value}>{formatNumber(environmentalImpact.c4.co2)}</span>
                  <span className={styles.unit}>kg CO2 absorbed</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.value}>{formatNumber(environmentalImpact.c4.o2)}</span>
                  <span className={styles.unit}>kg O2 produced</span>
                </div>
              </div>
            </div>

            <div className={styles.result1card + ' ' + styles.impact1difference}>
              <h3>📈 Additional Benefits</h3>
              <div className={styles.metrics}>
                <div className={styles.metric}>
                  <span className={styles.value}>+{formatNumber(environmentalImpact.difference.co2)}</span>
                  <span className={styles.unit}>kg extra CO2 captured</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.value}>+{formatNumber(environmentalImpact.difference.o2)}</span>
                  <span className={styles.unit}>kg extra O2 produced</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.value}>{formatNumber(environmentalImpact.waterSaved)}</span>
                  <span className={styles.unit}>liters water saved</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.real1world1impact}>
            <h4>🌍 Real-World Context</h4>
            <p>
              The extra CO2 captured by C4 Super Trees is equivalent to taking{' '}
              <strong>{environmentalImpact.equivalentCars.toLocaleString()} cars</strong> off the road for a year!
            </p>
            {treeCount >= 1000 && (
              <p>
                This forest would produce enough oxygen for approximately{' '}
                <strong>{Math.round(environmentalImpact.c4.o2 / 550).toLocaleString()} people</strong> annually.
              </p>
            )}
          </div>
        </div>
      </section>

      <section>
        <h2>🎯 Applications</h2>
        <ul className={styles.applications1list}>
          <li><strong>Urban Reforestation:</strong> Rapid green infrastructure development in cities</li>
          <li><strong>Carbon Offset Projects:</strong> Accelerated carbon sequestration for climate goals</li>
          <li><strong>Arid Land Restoration:</strong> Reforestation in challenging, dry environments</li>
          <li><strong>Industrial Carbon Capture:</strong> Large-scale atmospheric CO2 reduction</li>
          <li><strong>Ecosystem Restoration:</strong> Fast-track recovery of degraded landscapes</li>
        </ul>
      </section>

      <footer className={styles.product1footer}>
        <div className={styles.call1to1action}>
          <h3>Ready to Transform Your Environment?</h3>
          <p>Join the future of sustainable reforestation with C4 Super Trees.</p>
        </div>
      </footer>
    </div>
  );
}

export default C4SuperTreePage;