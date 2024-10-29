import './App.css';
import CandidTypo from './components/CandidTypo/CandidTypo';
import InviTitle from './components/InviTitle/InviTitle';
import InviInfo from './components/InviInfo/InviInfo';
import InviDesc from './components/InviDesc/InviDesc';
import Stars from './components/Star/Star';
import { motion } from 'framer-motion';
import Countdown from './components/Countdown/Countdown';

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        when: "beforeChildren",
        delayChildren: 0.3,
        staggerChildren: 0.5
      } 
    }
  };

  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 50 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5  // 섹션 내부 요소들의 순차적 등장을 위한 설정
      } 
    }
  };

  const itemVariants = {
    hidden: { 
      y: 30,
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      } 
    }
  };

  return (
    <>
      <Stars />
      <motion.div 
        className='container glass-effect'
        id='phone'
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className='section primary-section' 
          id='main'
          variants={sectionVariants}
        >
          <motion.div variants={itemVariants}>
            <InviTitle />
          </motion.div>
          <motion.div variants={itemVariants} className="candid-typo-wrapper">
            <CandidTypo />
          </motion.div>
          <motion.div variants={itemVariants} className="countdown-wrapper">
            <Countdown />
          </motion.div>
          <motion.div variants={itemVariants} className="align-right">
            <InviDesc />
          </motion.div>
          <motion.div variants={itemVariants} style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <img id="arrow" src="arrow_down.gif" />
          </motion.div>
        </motion.div>
        <motion.div 
          className='section secondary-section'
          variants={sectionVariants}
        >
          <InviInfo />
        </motion.div>
      </motion.div>
    </>
  );
}

export default App;
