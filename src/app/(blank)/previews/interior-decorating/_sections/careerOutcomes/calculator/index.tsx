'use client';

import Slider from 'rc-slider';
import type { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import { useId, useState } from 'react';

import 'rc-slider/assets/index.css';
import styles from './index.module.scss';
import { Result } from './result';

export type Tier = 'standard' | 'premium';

export const Calculator: FC = () => {
  const [ projectCount, setProjectCount ] = useState(30);
  const [ projectFee, setProjectFee ] = useState(2500);
  const [ tier, setTier ] = useState<Tier>('standard');
  const [ expanded, setExpanded ] = useState(false);
  const id = useId();

  const handleSlide = (value: number | number[]): void => {
    if (typeof value === 'number') {
      setProjectCount(value);
    }
  };

  const handleProjectFeeChange: ChangeEventHandler<HTMLInputElement> = e => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      setProjectFee(newValue);
    }
  };

  const handleTierChange: ChangeEventHandler<HTMLInputElement> = e => {
    const newValue = e.target.value;
    if (newValue === 'standard' || newValue === 'premium') {
      setTier(newValue);
    }
  };

  const handleExpand: MouseEventHandler<HTMLElement> = () => {
    setExpanded(e => !e);
  };

  return (
    <div className="card bg-white text-start">
      <div className="card-body">
        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <h3 className="h6 mb-3">Plan Your Year</h3>
            <p>Projects per Year: <span className="text-primary">{projectCount}</span></p>
            <Slider
              min={1}
              max={60}
              step={1}
              defaultValue={32}
              value={projectCount}
              onChange={handleSlide}
              className="mb-4"
              styles={{ track: { backgroundColor: '#007bff' }, handle: { borderColor: '#007bff' } }}
              activeDotStyle={{ borderColor: '#007bff' }}
            />
            <div onClick={handleExpand} className={styles.expandHeader}>
              <span>Advanced Settings</span>
              <span className={`${styles.plusSign} ${expanded ? styles.expanded : undefined}`}>+</span>
            </div>
            {expanded && (
              <div className={styles.expandedSection}>
                <div className="mb-3">
                  <label htmlFor={`fee${id}`} className="form-label">Average Fee per Project</label>
                  <input value={projectFee} onChange={handleProjectFeeChange} id={`fee${id}`} type="number" step="1" min="0" max="5000" className="form-control" />
                </div>
                <label className="form-label">Service Tier</label>
                <div className="d-flex">
                  <div className="form-check me-3">
                    <input className="form-check-input" type="radio" name="tier" id={`tierStandard${id}`} value="standard" checked={tier === 'standard'} onChange={handleTierChange} />
                    <label className="form-check-label" htmlFor={`tierStandard${id}`}>Standard</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="tier" id={`tierPremium${id}`} value="premium" checked={tier === 'premium'} onChange={handleTierChange} />
                    <label className="form-check-label" htmlFor={`tierPremium${id}`}>Premium (+25%)</label>
                  </div>
                </div>
              </div>
            )}

          </div>
          <div className="col-12 col-lg-6">
            <Result projectCount={projectCount} projectFee={projectFee} tier={tier} />
          </div>
        </div>
      </div>
    </div>
  );
};
