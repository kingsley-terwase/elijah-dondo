import React, { useState } from 'react';
import {
    Typography,
    Box,
    Container,
    TextField,
    MenuItem,
    Slider,
    useTheme,
    useMediaQuery,
    Fade,
    Tabs,
    Tab,
    Grid,
    Chip,
    IconButton,
} from '@mui/material';
import { SearchButton, SearchCard } from '../StyledComponents';
import {
    SearchFilled,
    LocationFilled,
    HomeFilled,
    BuildingFilled,
    MoneyFilled
} from '@fluentui/react-icons';
import { FONT_FAMILY } from '../../Config/font';
import { COLORS } from '../../Config/color';

export const Hero = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [priceRange, setPriceRange] = useState([253, 250151]);
    const [tabValue, setTabValue] = useState(0);
    const [searchData, setSearchData] = useState({
        location: '',
        propertyType: '',
        category: '',
        city: '',
        bedrooms: '',
        minArea: ''
    });

    const handlePriceChange = (event, newValue) => {
        setPriceRange(newValue);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleInputChange = (field) => (event) => {
        setSearchData({
            ...searchData,
            [field]: event.target.value
        });
    };

    const propertyTypes = {
        rent: [
            { value: 'apartment', label: 'Apartment' },
            { value: 'house', label: 'House' },
            { value: 'studio', label: 'Studio' },
            { value: 'condo', label: 'Condo' },
            { value: 'townhouse', label: 'Townhouse' }
        ],
        sale: [
            { value: 'apartment', label: 'Apartment' },
            { value: 'house', label: 'House' },
            { value: 'villa', label: 'Villa' },
            { value: 'duplex', label: 'Duplex' },
            { value: 'penthouse', label: 'Penthouse' },
            { value: 'land', label: 'Land' }
        ]
    };

    const categories = {
        rent: [
            { value: 'furnished', label: 'Furnished' },
            { value: 'unfurnished', label: 'Unfurnished' },
            { value: 'semi-furnished', label: 'Semi-Furnished' },
            { value: 'short-term', label: 'Short Term' }
        ],
        sale: [
            { value: 'luxury', label: 'Luxury' },
            { value: 'new-development', label: 'New Development' },
            { value: 'resale', label: 'Resale' },
            { value: 'investment', label: 'Investment' }
        ]
    };

    const currentPropertyTypes = tabValue === 0 ? propertyTypes.rent : propertyTypes.sale;
    const currentCategories = tabValue === 0 ? categories.rent : categories.sale;

    const TabContent = ({ tabIndex }) => {
        return (
            <Box>
                <Grid container spacing={2} alignItems="end">
                    {/* Location */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Box sx={{ position: 'relative' }}>
                            <LocationFilled
                                style={{
                                    position: 'absolute',
                                    left: 8,
                                    top: '50%',
                                    transform: 'translateY(-30%)',
                                    color: COLORS.style_3,
                                    fontSize: '24px',
                                    zIndex: 1
                                }}
                            />
                            <TextField
                                label="Location"
                                placeholder="Enter location..."
                                variant="standard"
                                fullWidth
                                size="medium"
                                value={searchData.location}
                                onChange={handleInputChange('location')}
                                sx={{
                                    '& .MuiInput-root': {
                                        paddingLeft: '32px',
                                        '&:before': {
                                            borderBottom: `1px solid rgba(0,0,0,0.12)`,
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        },
                                        '&:after': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        marginLeft: '32px',
                                        color: '#666',
                                        fontSize: '17px',
                                        fontFamily: FONT_FAMILY.primary,
                                        '&.Mui-focused': {
                                            marginLeft: '0px',
                                            color: COLORS.primary,
                                        },
                                        '&.MuiFormLabel-filled': {
                                            marginLeft: '0px',
                                        }
                                    }
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Divider 1 */}
                    <Box sx={{
                        height: '60px',
                        width: '1px',
                        background: 'linear-gradient(180deg, transparent 0%, rgba(74, 103, 65, 0.3) 20%, rgba(74, 103, 65, 0.6) 50%, rgba(74, 103, 65, 0.3) 80%, transparent 100%)',
                        alignSelf: 'center',
                        display: { xs: 'none', md: 'block' },
                        mx: -1
                    }} />

                    {/* Property Type */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Box sx={{ position: 'relative' }}>
                            <HomeFilled
                                style={{
                                    position: 'absolute',
                                    left: 8,
                                    top: '50%',
                                    transform: 'translateY(-30%)',
                                    color: COLORS.tertiary,
                                    fontSize: '24px',
                                    zIndex: 1
                                }}
                            />
                            <TextField
                                select
                                label="Property Type"
                                value={searchData.propertyType}
                                onChange={handleInputChange('propertyType')}
                                variant="standard"
                                fullWidth
                                size="medium"
                                sx={{
                                    '& .MuiInput-root': {
                                        paddingLeft: '32px',
                                        '&:before': {
                                            borderBottom: `1px solid rgba(0,0,0,0.12)`,
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        },
                                        '&:after': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        marginLeft: '32px',
                                        color: '#666',
                                        fontSize: '17px',
                                        fontFamily: FONT_FAMILY.primary,
                                        '&.Mui-focused': {
                                            marginLeft: '0px',
                                            color: COLORS.primary,
                                        },
                                        '&.MuiFormLabel-filled': {
                                            marginLeft: '0px',
                                        }
                                    }
                                }}
                            >
                                <MenuItem value="">Select Property Type</MenuItem>
                                {currentPropertyTypes.map((type) => (
                                    <MenuItem key={type.value} value={type.value}>
                                        {type.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>

                    {/* Divider 2 */}
                    <Box sx={{
                        height: '60px',
                        width: '1px',
                        background: 'linear-gradient(180deg, transparent 0%, rgba(74, 103, 65, 0.3) 20%, rgba(74, 103, 65, 0.6) 50%, rgba(74, 103, 65, 0.3) 80%, transparent 100%)',
                        alignSelf: 'center',
                        display: { xs: 'none', md: 'block' },
                        mx: -1
                    }} />

                    {/* Category */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Box sx={{ position: 'relative' }}>
                            <BuildingFilled
                                style={{
                                    position: 'absolute',
                                    left: 8,
                                    top: '50%',
                                    transform: 'translateY(-30%)',
                                    color: COLORS.style,
                                    fontSize: '24px',
                                    zIndex: 1
                                }}
                            />
                            <TextField
                                select
                                label="Category"
                                value={searchData.category}
                                onChange={handleInputChange('category')}
                                variant="standard"
                                fullWidth
                                size="medium"
                                sx={{
                                    '& .MuiInput-root': {
                                        paddingLeft: '32px',
                                        '&:before': {
                                            borderBottom: `1px solid rgba(0,0,0,0.12)`,
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        },
                                        '&:after': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        marginLeft: '32px',
                                        color: '#666',
                                        fontSize: '17px',
                                        fontFamily: FONT_FAMILY.primary,
                                        '&.Mui-focused': {
                                            marginLeft: '0px',
                                            color: COLORS.primary,
                                        },
                                        '&.MuiFormLabel-filled': {
                                            marginLeft: '0px',
                                        }
                                    }
                                }}
                            >
                                <MenuItem value="">Select Category</MenuItem>
                                {currentCategories.map((category) => (
                                    <MenuItem key={category.value} value={category.value}>
                                        {category.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Box>
                    </Grid>

                    {/* Divider 3 */}
                    <Box sx={{
                        height: '60px',
                        width: '1px',
                        background: 'linear-gradient(180deg, transparent 0%, rgba(74, 103, 65, 0.3) 20%, rgba(74, 103, 65, 0.6) 50%, rgba(74, 103, 65, 0.3) 80%, transparent 100%)',
                        alignSelf: 'center',
                        display: { xs: 'none', md: 'block' },
                        mx: -1
                    }} />

                    {/* Bedrooms (for rent) or City (for sale) */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        {tabValue === 0 ? (
                            <TextField
                                select
                                label="Bedrooms"
                                value={searchData.bedrooms}
                                onChange={handleInputChange('bedrooms')}
                                variant="standard"
                                fullWidth
                                size="medium"
                                sx={{
                                    '& .MuiInput-root': {
                                        '&:before': {
                                            borderBottom: `1px solid rgba(0,0,0,0.12)`,
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        },
                                        '&:after': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#666',
                                        fontSize: '17px',
                                        fontFamily: FONT_FAMILY.primary,
                                        '&.Mui-focused': {
                                            color: COLORS.primary,
                                        }
                                    }
                                }}
                            >
                                <MenuItem value="">Bedrooms</MenuItem>
                                <MenuItem value="1">1 Bedroom</MenuItem>
                                <MenuItem value="2">2 Bedrooms</MenuItem>
                                <MenuItem value="3">3 Bedrooms</MenuItem>
                                <MenuItem value="4">4+ Bedrooms</MenuItem>
                            </TextField>
                        ) : (
                            <TextField
                                select
                                label="City"
                                value={searchData.city}
                                onChange={handleInputChange('city')}
                                variant="standard"
                                fullWidth
                                size="medium"
                                sx={{
                                    '& .MuiInput-root': {
                                        '&:before': {
                                            borderBottom: `1px solid rgba(0,0,0,0.12)`,
                                        },
                                        '&:hover:not(.Mui-disabled):before': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        },
                                        '&:after': {
                                            borderBottom: `2px solid ${COLORS.primary}`,
                                        }
                                    },
                                    '& .MuiInputLabel-root': {
                                        color: '#666',
                                        fontSize: '17px',
                                        fontFamily: FONT_FAMILY.primary,
                                        '&.Mui-focused': {
                                            color: COLORS.primary,
                                        }
                                    }
                                }}
                            >
                                <MenuItem value="">Select City</MenuItem>
                                <MenuItem value="lagos">Lagos</MenuItem>
                                <MenuItem value="abuja">Abuja</MenuItem>
                                <MenuItem value="kano">Kano</MenuItem>
                                <MenuItem value="port-harcourt">Port Harcourt</MenuItem>
                                <MenuItem value="ibadan">Ibadan</MenuItem>
                            </TextField>
                        )}
                    </Grid>

                    {/* Divider 4 */}
                    <Box sx={{
                        height: '60px',
                        width: '1px',
                        background: 'linear-gradient(180deg, transparent 0%, rgba(74, 103, 65, 0.3) 20%, rgba(74, 103, 65, 0.6) 50%, rgba(74, 103, 65, 0.3) 80%, transparent 100%)',
                        alignSelf: 'center',
                        display: { xs: 'none', md: 'block' },
                        mx: -1
                    }} />

                    {/* Price Range */}
                    <Grid size={{ xs: 12, md: 2 }}>
                        <Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1.5,
                                minHeight: '20px'
                            }}>
                                <MoneyFilled
                                    style={{
                                        color: COLORS.style,
                                        marginRight: 8,
                                        fontSize: '20px'
                                    }}
                                />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#666',
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        fontFamily: FONT_FAMILY.primary
                                    }}
                                >
                                    ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                                </Typography>
                            </Box>
                            <Slider
                                value={priceRange}
                                onChange={handlePriceChange}
                                valueLabelDisplay="auto"
                                min={0}
                                max={500000}
                                sx={{
                                    color: COLORS.style,
                                    mb: -2,
                                    mt: 0.5,
                                    '& .MuiSlider-thumb': {
                                        width: 18,
                                        height: 18,
                                        '&:hover': {
                                            boxShadow: '0 0 0 8px rgba(74, 103, 65, 0.16)',
                                        },
                                    },
                                    '& .MuiSlider-track': {
                                        height: 4,
                                    },
                                    '& .MuiSlider-rail': {
                                        height: 4,
                                        opacity: 0.3,
                                    }
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* Divider 5 */}
                    <Box sx={{
                        height: '60px',
                        width: '1px',
                        background: 'linear-gradient(180deg, transparent 0%, rgba(74, 103, 65, 0.3) 20%, rgba(74, 103, 65, 0.6) 50%, rgba(74, 103, 65, 0.3) 80%, transparent 100%)',
                        alignSelf: 'center',
                        display: { xs: 'none', md: 'block' },
                        mx: -1
                    }} />

                    {/* Search Button */}
                    <Grid size={{ xs: 12, md: 1.7 }}>
                        <SearchButton
                            variant="contained"
                            startIcon={<SearchFilled />}
                            fullWidth
                            sx={{
                                height: '48px',
                                fontSize: '15px',
                                fontWeight: 600,
                                mt: 1
                            }}
                        >
                            {tabValue === 0 ? 'Search' : 'Find'}
                        </SearchButton>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                    <Typography
                        variant="body2"
                        sx={{
                            mb: 2,
                            color: '#666',
                            fontWeight: 500
                        }}
                    >
                        Popular {tabValue === 0 ? 'Rental' : 'Sale'} Searches:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {tabValue === 0 ? (
                            <>
                                <Chip label="Studio Apartments" size="small" clickable />
                                <Chip label="2-Bed Furnished" size="small" clickable />
                                <Chip label="Lagos Island" size="small" clickable />
                                <Chip label="Short Term" size="small" clickable />
                                <Chip label="Pet Friendly" size="small" clickable />
                            </>
                        ) : (
                            <>
                                <Chip label="New Developments" size="small" clickable />
                                <Chip label="Luxury Villas" size="small" clickable />
                                <Chip label="Investment Properties" size="small" clickable />
                                <Chip label="Waterfront" size="small" clickable />
                                <Chip label="Gated Communities" size="small" clickable />
                            </>
                        )}
                    </Box>
                </Box>
            </Box>
        );
    };

    return (
        <Container maxWidth="lg" sx={{ py: 18 }}>
            <Fade in timeout={1000}>
                <Box>

                    <Box sx={{
                        textAlign: isMobile ? 'center' : 'left',
                        mb: 6,
                        position: 'relative',
                        zIndex: 3 
                    }}>
                        <Typography
                            variant={isMobile ? 'h3' : 'h2'}
                            sx={{
                                fontWeight: 700,
                                color: 'white', 
                                fontFamily: FONT_FAMILY.primary,
                                mb: 2,
                                mx: 2,
                                lineHeight: 1.2,
                                maxWidth: '800px',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.7)', 
                                position: 'relative',
                                zIndex: 3,
                            }}
                        >
                            Discover Your Perfect Property
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: 'rgba(255,255,255,0.9)', 
                                mb: 1,
                                mx: 2,
                                fontFamily: FONT_FAMILY.primary,
                                maxWidth: '600px',
                                fontWeight: 400,
                                fontSize: isMobile ? '18px' : '20px', 
                                lineHeight: 1.5,
                                textShadow: '1px 1px 2px rgba(0,0,0,0.7)', 
                                position: 'relative',
                                zIndex: 3,
                            }}
                        >
                            Premier real estate platform connecting you to premium properties
                            with complete confidence and transparency.
                        </Typography>

                        {/* Trust Indicators */}
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 3,
                            mt: 3,
                            mx: 2,
                            flexWrap: 'wrap',
                            justifyContent: isMobile ? 'center' : 'flex-start',
                            position: 'relative',
                            zIndex: 3,
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                backgroundColor: 'rgba(255,255,255,0.1)', // Added background for better visibility
                                padding: '8px 12px',
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontFamily: FONT_FAMILY.primary,
                                    color: 'white', // Changed to white
                                    fontSize: '20px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                }}>
                                    50K+
                                </Typography>
                                <Typography sx={{
                                    color: 'rgba(255,255,255,0.8)', // Changed to white with transparency
                                    fontFamily: FONT_FAMILY.primary,
                                    fontSize: '14px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                }}>
                                    Happy Clients
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: '8px 12px',
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontFamily: FONT_FAMILY.primary,
                                    color: 'white',
                                    fontSize: '20px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                }}>
                                    10K+
                                </Typography>
                                <Typography sx={{
                                    color: 'rgba(255,255,255,0.8)',
                                    fontFamily: FONT_FAMILY.primary,
                                    fontSize: '14px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                }}>
                                    Properties Listed
                                </Typography>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: '8px 12px',
                                borderRadius: '20px',
                                backdropFilter: 'blur(10px)',
                            }}>
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontFamily: FONT_FAMILY.primary,
                                    color: 'white',
                                    fontSize: '20px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                }}>
                                    15+
                                </Typography>
                                <Typography sx={{
                                    fontFamily: FONT_FAMILY.primary,
                                    color: 'rgba(255,255,255,0.8)',
                                    fontSize: '14px',
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                }}>
                                    Years Experience
                                </Typography>
                            </Box>
                        </Box>
                    </Box>

                    <SearchCard elevation={0}>
                        <Box sx={{ mb: 0 }}>
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    p: 0.5,
                                    backgroundColor: 'rgba(74, 103, 65, 0.1)',
                                    borderRadius: '50px',
                                    mb: 4,
                                }}
                            >
                                <Box
                                    onClick={() => setTabValue(0)}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: tabValue === 0 ? COLORS.style : 'transparent',
                                        color: tabValue === 0 ? '#fff' : '#666',
                                        fontWeight: tabValue === 0 ? 600 : 500,
                                        fontSize: '16px',
                                        // minWidth: '120px',
                                        textAlign: 'center',
                                        '&:hover': {
                                            backgroundColor: tabValue === 0 ? COLORS.style : 'rgba(74, 103, 65, 0.1)',
                                        }
                                    }}
                                >
                                    For Rent
                                </Box>
                                <Box
                                    onClick={() => setTabValue(1)}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        borderRadius: '50px',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        backgroundColor: tabValue === 1 ? COLORS.style : 'transparent',
                                        color: tabValue === 1 ? '#fff' : '#666',
                                        fontWeight: tabValue === 1 ? 600 : 500,
                                        fontSize: '16px',
                                        // minWidth: '120px',
                                        textAlign: 'center',
                                        '&:hover': {
                                            backgroundColor: tabValue === 1 ? COLORS.style : 'rgba(74, 103, 65, 0.1)',
                                        }
                                    }}
                                >
                                    For Sale
                                </Box>
                            </Box>
                        </Box>

                        {/* Tab Content */}
                        <TabContent tabIndex={tabValue} />
                    </SearchCard>
                </Box>
            </Fade>
        </Container>
    );
};