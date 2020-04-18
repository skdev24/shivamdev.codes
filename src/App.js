import React from 'react';

const screenWidth = window.innerWidth;
const mobileWidth =
  // eslint-disable-next-line no-nested-ternary
  screenWidth <= 500
    ? 400
    : screenWidth <= 1000
    ? 400
    : 400;

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0px',
        height: '100%',
        overflow: 'hidden',
        flexDirection: 'column',
        paddingTop: '30px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: mobileWidth,
          height: 700,
        }}
      >
        <img
          style={{
            position: 'absolute',
            display: 'flex',
            width: mobileWidth,
            alignSelf: 'center',
            height: 'auto'
          }}
          resize="contain"
          className=""
          src={require('./assets/shivamdev.png')}
          alt=""
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 80,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}
        >
          {[
            'https://twitter.com/Kdev24S',
            'https://instagram.com/d_sk04/',
            'https://linkedin.com/in/skdev24/',
            'https://github.com/skdev24'
          ].map((item, index) => (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/anchor-is-valid, jsx-a11y/anchor-has-content, jsx-a11y/control-has-associated-label
            <a
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              style={{
                height: mobileWidth * 0.15,
                width: mobileWidth * 0.16,
              }}
              href={item}
              // eslint-disable-next-line react/jsx-no-target-blank
              target="_blank"
            />
          ))}
        </div>
      </div>
      <div
        style={{
          height: '100px',
          width: '200px'
        }}
      />
    </div>
  );
}

export default App;
