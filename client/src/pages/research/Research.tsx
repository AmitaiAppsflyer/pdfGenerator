import ActionCard from '../../components/common/ActionCard';
import ResearchForm from './components/ResearchForm';

const Research = () => {
  const handleResearchSubmit = (prompt: string) => {
    // TODO: Implement API call to backend for research generation
    console.log('Research prompt submitted:', prompt);
  };

  return (
    <ActionCard>
      <ResearchForm onSubmit={handleResearchSubmit} />
    </ActionCard>
  );
};

export default Research; 