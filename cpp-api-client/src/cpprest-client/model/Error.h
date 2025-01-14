/**
 * ALICE Bookkeeping
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 *
 * NOTE: This class is auto generated by OpenAPI-Generator 5.4.0.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/*
 * Error.h
 *
 * An Error object.
 */

#ifndef ORG_OPENAPITOOLS_CLIENT_MODEL_Error_H_
#define ORG_OPENAPITOOLS_CLIENT_MODEL_Error_H_


#include "ModelBase.h"

#include <cpprest/details/basic_types.h>
#include "model/ErrorSource.h"

namespace org {
namespace openapitools {
namespace client {
namespace model {


/// <summary>
/// An Error object.
/// </summary>
class  Error
    : public ModelBase
{
public:
    Error();
    virtual ~Error();

    /////////////////////////////////////////////
    /// ModelBase overrides

    void validate() override;

    web::json::value toJson() const override;
    bool fromJson(const web::json::value& json) override;

    void toMultipart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) const override;
    bool fromMultiPart(std::shared_ptr<MultipartFormData> multipart, const utility::string_t& namePrefix) override;

    /////////////////////////////////////////////
    /// Error members

    /// <summary>
    /// A human-readable explanation specific to this occurrence of the problem.
    /// </summary>
    utility::string_t getDetail() const;
    bool detailIsSet() const;
    void unsetDetail();

    void setDetail(const utility::string_t& value);

    /// <summary>
    /// 
    /// </summary>
    std::shared_ptr<ErrorSource> getSource() const;
    bool sourceIsSet() const;
    void unsetSource();

    void setSource(const std::shared_ptr<ErrorSource>& value);

    /// <summary>
    /// The HTTP status code applicable to this problem.
    /// </summary>
    utility::string_t getStatus() const;
    bool statusIsSet() const;
    void unsetStatus();

    void setStatus(const utility::string_t& value);

    /// <summary>
    /// A short, human-readable summary of the problem.
    /// </summary>
    utility::string_t getTitle() const;
    bool titleIsSet() const;
    void unsetTitle();

    void setTitle(const utility::string_t& value);


protected:
    utility::string_t m_Detail;
    bool m_DetailIsSet;
    std::shared_ptr<ErrorSource> m_Source;
    bool m_SourceIsSet;
    utility::string_t m_Status;
    bool m_StatusIsSet;
    utility::string_t m_Title;
    bool m_TitleIsSet;
};


}
}
}
}

#endif /* ORG_OPENAPITOOLS_CLIENT_MODEL_Error_H_ */
