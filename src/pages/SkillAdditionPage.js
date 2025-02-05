import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For navigation to WorkUploadPage
import backgroundImage from '../assets/images/skilladdition1.jpg'; // Adjust the path as necessary

const SkillAdditionPage = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript", "C++", "Ruby"],
    },
    {
      category: "Graphic Design",
      skills: ["Photoshop", "Illustrator", "InDesign", "CorelDRAW", "Figma"],
    },
    {
      category: "Business & Management",
      skills: ["Project Management", "Business Strategy", "Leadership", "Time Management"],
    },
    {
      category: "Communication & Writing",
      skills: ["Public Speaking", "Content Writing", "Copywriting", "Editing", "SEO Writing"],
    },
    {
      category: "Tutoring",
      skills: ["Physics", "Chemistry", "Calculus", "Statistics", "Programming"],
    },
    // Add more categories as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillLevel, setSkillLevel] = useState('Beginner');
  const [skillHighlights, setSkillHighlights] = useState('');

  const handleSkillChange = (event) => {
    const selected = [...selectedSkills];
    if (event.target.checked) {
      selected.push(event.target.value);
    } else {
      const index = selected.indexOf(event.target.value);
      if (index > -1) {
        selected.splice(index, 1);
      }
    }
    setSelectedSkills(selected);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSkills([]); // Reset selected skills when category changes
  };

  const handleSubmit = () => {
    alert(`
      Skills Selected: ${selectedSkills.join(", ")} 
      Skill Level: ${skillLevel} 
      Highlights: ${skillHighlights || "None provided"}
    `);
    // Send data to backend if needed
  };

  return (
    <div>
      {/* Header Image */}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: '250px', // Set the height of the header image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-white" style={{ paddingLeft: '20px', paddingTop: '80px' }}>
          <h1>Skill Management</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mt-3"> {/* Adjusted margin-top to move content upwards */}
        <p className="text-black">Highlight your skills, expertise, and achievements to enhance your profile for opportunities!</p>

        {/* Skill Category Dropdown */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label text-black">Choose Skill Category</label>
          <select id="category" className="form-select" value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">Select a Category</option> {/* Default blank option */}
            {skillCategories.map((category, index) => (
              <option key={index} value={category.category}>{category.category}</option>
            ))}
          </select>
        </div>

        {/* Skills Checkboxes */}
        <div className="mb-3">
          <label className="form-label text-black">Select Skills</label>
          <div>
            {selectedCategory && skillCategories
              .find((category) => category.category === selectedCategory)
              .skills.map((skill, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={skill}
                    id={skill}
                    onChange={handleSkillChange}
                  />
                  <label className="form-check-label text-black" htmlFor={skill}>
                    {skill}
                  </label>
                </div>
            ))}
          </div>
        </div>

        {/* Skill Level Selector */}
        <div className="mb-3">
          <label htmlFor="skillLevel" className="form-label text-black">Skill Level</label>
          <select id="skillLevel" className="form-select" value={skillLevel} onChange={(e) => setSkillLevel(e.target.value)}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>

        {/* Skill Highlights */}
        <div className="mb-3">
          <label htmlFor="skillHighlights" className="form-label text-black">Skill Highlights (Optional)</label>
          <textarea
            id="skillHighlights"
            className="form-control"
            placeholder="Describe achievements or notable experiences related to these skills (e.g., 'Developed a Python-based app used by 1000+ users')."
            value={skillHighlights}
            onChange={(e) => setSkillHighlights(e.target.value)}
          />
        </div>

        <button className="btn btn-primary" onClick={handleSubmit}>Save Skills</button>

        {/* Link to WorkUploadPage */}
        <div className="mt-4">
          <h4 className="text-black">Showcase Your Work</h4>
          <p className="text-black">Upload projects, designs, or articles to complement your skills.</p>
          <Link to="/upload-work" className="btn btn-secondary">Upload Your Work</Link>
        </div>
      </div>
    </div>
  );
};

export default SkillAdditionPage;