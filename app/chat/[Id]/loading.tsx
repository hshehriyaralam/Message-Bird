import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader-container">
        <div className="loader" />
        <div className="loader-text">Loading...</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .loader {
    width: 70px;
    height: 70px;
    position: relative;
  }

  .loader:before {
    content: "";
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 6px solid #0D9488;
    position: absolute;
    top: 0;
    left: 0;
    animation: pulse 1s ease-in-out infinite;
  }

  .loader:after {
    content: "";
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 6px solid transparent;
    border-top-color: #0D9488;
    position: absolute;
    top: 0;
    left: 0;
    animation: spin 2s linear infinite;
  }

  .loader-text {
    font-size: 24px;
    margin-top: 20px;
    color: #0D9488;
    font-family: Arial, sans-serif;
    text-align: center;
    text-transform: uppercase;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.6);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0;
    }
    100% {
      transform: scale(0.6);
      opacity: 1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .content {
    display: none;
  }

  .loaded .loader-container {
    display: none;
  }

  .loaded .content {
    display: block;
  }`;

export default Loader;


// NEXT_PUBLIC_SUPABASE_URL=https://xjohgykjhsqkupscjdfo.supabase.co
// NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhqb2hneWtqaHNxa3Vwc2NqZGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMzA4NzcsImV4cCI6MjA5MjYwNjg3N30.xbPNTDl-iXBiyDsziL9TV211bpnyQBYbGIeYEkNtfcc
// NEXT_PUBLIC_SITE_URL=http://localhost:3000