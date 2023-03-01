import SEO from '~/components/common/SEO';
import useCursorState from '~/store/cursor/useCursorState';

export default function Root() {
  const { onMouseEnter, onMouseLeave } = useCursorState();

  return (
    <>
      <SEO />
      <main>
        <div style={{ width: 1000, height: 1000, backgroundColor: 'lightgreen' }}>
          <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ width: 100, height: 40, backgroundColor: 'red' }}
          >
            button
          </button>
        </div>
      </main>
    </>
  );
}
